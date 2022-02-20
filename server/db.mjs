import config from "config";
import mongo from "mongoose";

mongo.connection.on("error", (err) => console.error(err));
// mongo.connection.on("connected", () => console.log("DB Connected"));
// mongo.connection.on("disconnected", () => console.log("DB Disconnected"));

const { DB } = process.env;

const disconnect = mongo.disconnect;
const connect = () =>
  mongo.connect(config.mongo.uri, {
    autoIndex: true,
    autoCreate: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

export { connect, disconnect };

export default function configureDatabase(app) {
  connect();
}
