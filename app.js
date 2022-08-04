const express = require('express');
const app = express();
const databaseConnect = require('./connection/dbconnect');
const bodyparser = require('body-parser');
const apiRouter = require('./routes/signupInf');
const session = require('express-session');
const PORT = 8000;

app.use(express.static(__dirname+'/images'))
app.set('view engine',"ejs");
app.get('/login',(req,res)=>{
    res.render('login.ejs',{
        title:'登入測試',
        userName:"",
    })
})

app.get('/signup',(req,res)=>{
    res.render('signup.ejs')
})
app.get('/header',(req,res)=>{
    res.render('header.ejs',{
        title:"",
        userName:'',
    })
})

app.use(
    session({
        secret:'logintest',
        resave:true,
        saveUninitialized:true,
        name:'login',
        cookie:{
            maxAge:5*50*1000
        }
    })     
)

//登入 並渲染index頁面
app.get('/index',(req,res)=>{
    res.render('index.ejs',{
        title:'登入測試',
        userName:req.session.account,
    })
})
//登出刪除session 並渲染
app.get('/loginout',(req,res)=>{
    delete req.session.account;
    res.redirect('/login');
})



app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use('/signupapi',apiRouter)

app.listen(PORT,()=>{
    console.log('Server is start of '+PORT)
})