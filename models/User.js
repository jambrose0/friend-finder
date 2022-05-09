const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const Thought = require("./Thought");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter Email Address"],
      unique: true,
      match: [
        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        "Please add a valid email address.",
      ],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: Thought,
      },
    ],
    friends: [
      {
        type: String,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;
