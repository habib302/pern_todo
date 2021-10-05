const express=require("express");
const app=express();
const cors=require("cors");



//middleware
app.use(cors());
app.use(express.json());  //req.body


//routes

//create a todo



//get all todos


//get a todo



// update a todo



//delete a todo



app.listen(5000,()=>{
    console.log(`server is running on port 5000`);
})
