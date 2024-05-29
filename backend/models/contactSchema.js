const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  messages: [],
});

userSchema.method.MessageSave = async function (message) {
  try {
    this.messages = this.messages.concat({ message });
    await this.save();
    return message;
  } catch (error) {
    console.log(error);
  }
};

const users = new mongoose.model("users", userSchema);
module.exports = users;
