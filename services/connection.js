const mongoose = require('mongoose');
const Redis = require("ioredis");
const mysql=require('mysql2')
const { Sequelize }= require('sequelize')



exports.sequelize= new Sequelize('project87' , 'admin', 'your_password',{  // 1st. Database-name, 2nd. username, 3rd. password
    host: 'localhost',
    dialect: 'mysql',
    logging: false, 
})







