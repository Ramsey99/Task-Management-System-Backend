const { mongoose, Schema } = require("mongoose");
const taskSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      lowercase: true,
      trim: true,
    },
    title: {
      type: String,
      require: true,
      lowercase: true,
      trim: true
    },
    description: {
      type: String,
      require: true,
      trim: true,
    },
    last_date: {
      type: Date,
      require: true
    }
  },
  {
    timestamps: true,
  }
);
const task = mongoose.model("Task", taskSchema);
module.exports = task;
