import mongo from "mongoose";

const UserSchema = new mongo.Schema(
  {
    username: { type: String, required: true, trim: true, unique: true },
    email: { type: String, required: true, trim: true, unique: true },
    displayName: { type: String, required: true, trim: true },
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
  },
  {
    timestamps: true,
    toJSON: { getters: true, versionKey: false, depopulate: true },
  }
);

const User = mongo.model("User", UserSchema);

export default User;
