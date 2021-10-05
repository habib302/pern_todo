const express=require("express");
const app=express();
const cors=require("cors");
const pool=require("./db");


//middleware
app.use(cors());
app.use(express.json());  //req.body


//routes

//create a todo
app.post("/todos",(req,res)=>{
    try{
        const {description} =req.body;
        const newTodo = pool.query("INSERT INTO todo(description) VALUES($1) RETURNING *",[description]);
        res.json(newTodo.rows[0]);

    }catch(err){
        console.error(err.message);
    }
})


//get all todos


//get a todo



// update a todo



//delete a todo



app.listen(5000,()=>{
    console.log(`server is running on port 5000`);
})
