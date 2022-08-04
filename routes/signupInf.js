const express =require('express');
const router = express.Router();
const dbConnect = require('../connection/dbconnect')

//登入
router.post('/login',(req,res,next)=>{
    let data = req.body;
    dbConnect.query("SELECT * FROM personnel WHERE account=? and password=?"
    ,[data.account,data.password]
    ,(err,result)=>{
        if(err){
            res.status(400).json({"message":"bad request!!"})
        }else{
            if(result != null && result[0] != undefined && result[0].id != null){
                let custAccount = JSON.parse(JSON.stringify(result[0]))
                req.session.account = custAccount.name;
                console.log(req.session.account)
                console.log(custAccount)
                res.status(200).json({"custAccount":custAccount})
              
            }else{
                res.status(400).json({'message':"not correct account or password"})
            }
        }  
    })
})



//註冊
router.post('/information',(req,res,next)=>{
    let insertData = req.body
    dbConnect.query('INSERT INTO personnel (name,phone,email,account,password) VALUES (?,?,?,?,?)'
    ,[insertData.name,insertData.phone,insertData.email,insertData.account,insertData.password]
    ,(err,result)=>{
        if(err){
            console.log(err);
            throw err
        }else{
            res.status(200).json({"message":"Insert Data Successfully!!"})
        }
    })
})

module.exports=router