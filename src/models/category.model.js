// models/Category.js

const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,  // Makes sure category names are unique
    trim: true,    // Removes extra spaces
  },
});

// Create a model from the schema
const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
