const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

// const friendSchema = new Schema({
//  friends: {
//     type: Schema.Types.ObjectId,
//     default: () => new Types.ObjectId(),
//   },
// });

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
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
    // thoughts: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Thought",
    //   },
    // ],
    // friends: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: this.user.friends.length,
    //   },
    // ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

//length
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;
