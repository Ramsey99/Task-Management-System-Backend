require('dotenv').config();
const  {app}  = require('./app');
const connectDB = require('./config/db');
const Category = require('./models/category.model');




// const predefinedCategories = [
//     { name: 'Technology' },
//     { name: 'Health' },
//     { name: 'Education' },
//     { name: 'Entertainment' },
//   ];

  const seedCategories = async () => {
    try {
      const existingCategories = await Category.find({});
  
      if (existingCategories.length === 0) {
        await Category.insertMany(predefinedCategories);
        console.log('Predefined categories inserted successfully!');
      } else {
        console.log('Categories already exist, skipping seeding.');
      }
    } catch (err) {
      console.error('Error seeding categories:', err);
    }
  };
  
  // Call the function to seed the categories
  seedCategories();

connectDB().then(()=>{
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
}).catch((err)=>{
    console.log("mongo db connection failed !!!", err);
    
})





