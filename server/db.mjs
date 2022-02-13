import mongo from "mongoose";
import config from "config";

mongo.connection.on("error", (err) => console.error(err));
mongo.connection.on("connected", () => console.log("DB Connected"));
mongo.connection.on("disconnected", () => console.log("DB Disconnected"));

const connect = () =>
  mongo.connect(config.db, {
    autoIndex: true,
    autoCreate: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
const disconnect = mongo.disconnect;

export { connect, disconnect };
