import config from "config";
import m from "mongoose";

const { NODE_ENV: env = "development" } = process.env;

// m.connection.on("connected", () => console.log("DB Connected"));
// m.connection.on("disconnected", () => console.log("DB Disconnected"));

m.connection.on("error", (err) => console.error(err));

const disconnect = m.disconnect;
const connect = () => {
  if (env === "development") m.set("debug", false);
  return m.connect(config.mongo.uri, {
    autoIndex: true,
    autoCreate: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export { connect, disconnect };

export default function configureDatabase(app) {
  connect();
}
