const Task = require('../models/task.model');

const createTask = async (req, res) => {
  try {
    const userId = req.user.id; 
    const { category_id } = req.params;
    const { title, description, last_date } = req.body;

    const newTask = new Task({
      user_id: userId,
      category_id: category_id, 
      title,
      description,
      last_date,
    });

    // Save the new task to the database
    await newTask.save();

    // Send a success response
    return res.status(201).json({
      success: true,
      message: 'Task created successfully',
      task: newTask,
    });
  } catch (err) {
    console.error('Error creating task:', err);
    return res.status(500).json({
      success: false,
      message: 'Error creating task',
      error: err.message, // Send error message for debugging
    });
  }
};

const getTask= async (req,res)=>{
    try{
        const userId = req.user.id; 
        const tasks = await Task.find({ user_id: userId });
        if (!tasks || tasks.length === 0) {
            return res.status(404).json({
              success: false,
              message: 'No tasks found for this user',
            });
          }
          return res.status(200).json({
            success: true,
            message: 'Tasks retrieved successfully',
            tasks: tasks,
          });


    }catch(err){
        console.error('Error retrieving tasks:', err);

        // Return an internal server error response
        return res.status(500).json({
          success: false,
          message: 'Error retrieving tasks',
          error: err.message, // Send error message for debugging
        });
    }
}

module.exports = { createTask,getTask };
