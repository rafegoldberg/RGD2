import config from "config";
import connectMongoSession from "connect-mongodb-session";
import session from "express-session";

function configureMockSessions(app) {
  app.use(mockSessionMiddleware);
}

function configureMongoSessions(app) {
  // console.log("Configuring the Express app to use MongoDB-backed sessions");
  const MongoDBStore = connectMongoSession(session);
  const store = new MongoDBStore({
    uri: config.mongo.uri,
    collection: config.mongo.sessionCollection,
    expires: config.session.expressSession.cookie.maxAge,
  });
  store.on("error", (error) => {
    console.error(error);
  });
  app.use(session({ ...config.session.expressSession, store }));
}

export default function configureSessions(app) {
  if (config.session.mock === true) {
    return configureMockSessions(app);
  }
  return configureMongoSessions(app);
}
