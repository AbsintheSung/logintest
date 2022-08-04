const mysql = require('mysql');
const dbConnect = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test",
});

dbConnect.connect((err)=>{
    if(err){
        console.log(err);
        throw err;
    }else{
        console.log("Database is Connection Successfully");
    }
});

module.exports=dbConnect;