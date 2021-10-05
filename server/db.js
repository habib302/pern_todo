const Pool =require("pg").Pool;

// //from home
// const pool = new Pool({
//     user:"postgres",
//     password:"root",
//     host:"localhost",
//     port:5432,
//     database:"perntodo"
// });


//from office
const pool = new Pool({
    user:"postgres",
    password:"1234",
    host:"localhost",
    port:5432,
    database:"db1"
});

module.exports=pool;