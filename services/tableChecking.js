const School = require('../models/school.js');

exports.syncModels= async ()=>{
  try {
    await School.sync()
    console.log('The school table has been created (if it did not already exist).');
  } catch (error) {
    console.log('Error creating the User table:', error);
  }
}


