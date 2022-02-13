import mongo from "mongoose";

const PageSchema = new mongo.Schema(
  {
    title: { type: String, required: true, trim: true, unique: true },
    body: { type: String, required: true, trim: true },
    author: { type: mongo.Schema.Types.ObjectId, ref: "User" },
    parent: { type: mongo.Schema.Types.ObjectId, ref: "Page" },
  },
  {
    timestamps: true,
    toJSON: { getters: true, versionKey: false, depopulate: false },
  }
);

const Page = mongo.model("Page", PageSchema);

export default Page;
