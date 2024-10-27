const { mongoose, Schema } = require("mongoose");
const taskSchema = new Schema(
  {
    user_id:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "user", 
        required: true 
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "category", 
        required: true 
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
