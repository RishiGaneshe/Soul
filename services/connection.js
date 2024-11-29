const mongoose = require('mongoose');
const Redis = require("ioredis");
const mysql=require('mysql2')
const { Sequelize }= require('sequelize')



exports.sequelize= new Sequelize('project87' , 'admin', 'your_password',{  // 1st. Database-name, 2nd. username, 3rd. password
    host: 'localhost',
    dialect: 'mysql',
    logging: false, 
})


exports.connectToMongoDB=async (mongoURL)=>{
    return mongoose.connect(mongoURL);    
}


exports.redisClient = async (redisURL)=>{
  try{
      const client= await new Redis(redisURL);
      return client;
  }catch(err){
      console.log("Error in Redis Service: ", err)
  }
}





