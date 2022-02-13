import mongo from "mongoose";

mongo.connection.on("error", (err) => console.error(err));
// mongo.connection.on("connected", () => console.log("DB Connected"));
// mongo.connection.on("disconnected", () => console.log("DB Disconnected"));

const { DB } = process.env;

const connect = () =>
  mongo.connect(DB, {
    autoIndex: true,
    autoCreate: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
const disconnect = mongo.disconnect;

export { connect, disconnect };
