const express= require('express')
const app=express();
const {PORT}= require('./config/server-config');

const prepareAndStartServer=()=>{
app.listen(PORT,()=>{
  console.log(`server started on ${PORT}` );
})
}

prepareAndStartServer();