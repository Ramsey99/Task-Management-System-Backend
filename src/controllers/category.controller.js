const Category = require('../models/category.model');

const getCategories = async (req, res) => {
  try {
    // Fetch all categories from the database
    const categories = await Category.find();

    // Send the categories in the response
    res.status(200).json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ message: 'Failed to fetch categories' });
  }
};

module.exports = { getCategories };
