var http = require('http')
var path = require('path')
var index_controller=require('./server/controller/indexController')
var pageController=require('./server/controller/pageController')
var User = require("./server/model/indexModel")
const express = require("express");
const PORT = 3000;
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const { async } = require('rxjs');
const app = express();
app.use(cors()); 
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(morgan("dev")); 

app.post("/cms/login",async (req,res)=>{
    let login = {
        email: req.body.email,
        password: req.body.password
    }
    console.log(login);
    try {
        let user = await User. userSignIn("cms",login);
        console.log("data", user)
        //check if user exit 
        if (!user) {
            res.status(400).json({
                type: "Not Found",
                msg: "Wrong Login Details"
            })
        }
       
        if (user.length > 0) {
            let token = await User.generateJwtToken(
                user[0]
            , "secret", {
                expiresIn: 604800
            })
            if (token) {
                res.status(200).json({
                    success: true,
                    token: token,
                    userCredentials: user
                })
            }
        } else {
            res.status(400).json({
                type: "Not Found",
                msg: "Wrong Login Details"
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({
            type: "Something Went Wrong",
            msg: err
        })
    }
    
});

app.get("/cms/getUsers",async (req,res)=>{
    
    try {
        let user = await User.getUser("cms");
        console.log("data", user)
        //check if user exit
        if (!user) {
            res.status(400).json({
                type: "Not Found",
                msg: "User not found"
            })
        }
      res.status(200).json({users:user})
    } catch (err) {
        console.log(err)
        res.status(500).json({
            type: "Something Went Wrong",
            msg: err
        })
    }
    
});
app.post('/cmd/insertUsers' , async (req,res)=> {
    let user = req.body;
    try {
     const ress =    await User.insert("cms" ,user);
     res.status(200).json({status:"success", ress})
           //check if user exit
    }catch(err) {
        res.status(500).json({
            type: "Something Went Wrong",
            msg: err
        })
    }
})
app.delete("/cms/deleteUsers",async (req,res)=>{
    let ids = req.body.ids;
    try {
     await User.deleteUsers("cms" ,ids);
        //check if user exit
      
      res.status(200).json({status:"success"})
    } catch (err) {
        console.log(err)
        res.status(500).json({
            type: "Something Went Wrong",
            msg: err
        })
    }
    
});

app.use('/', pageController);


app.use(express.static(path.join(__dirname,"dist/cms-app")))

var server= http.createServer(app)
server.listen(3000,(err,result)=> {
 if(err)
 console.log(err)
 else
 console.log("server invokes at link http://localhost:3000" , result)
});

