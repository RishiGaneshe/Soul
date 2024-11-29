const express= require('express')
const cors= require('cors')
const { connectToMongoDB, redisClient, sequelize} = require('./services/connection.js')
const { syncModels }= require('./services/tableChecking.js')
const School= require('./routes/IS.routes.js')


const app= express()
const PORT= 6000
const mongoURL= 'mongodb://localhost:27017/Soul'
const redisURL='redis://172.22.138.48:6379'

connectToMongoDB(mongoURL).then(()=>{console.log("mongoDB connected")}) 
redisClient(redisURL).then(()=>{console.log("Redis connected")}) ;

async function connectDatabase(){
    try{
        await sequelize.authenticate();
        console.log('MySQL connected.');
    }catch(err){
        console.log("Error in connecting database",err)
     }
  }
connectDatabase();

syncModels();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:false}))


app.use("/", School)


app.listen(PORT,()=>{console.log(`Server on ${PORT}`)})