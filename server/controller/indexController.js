var express = require('express')
var router = express.Router()
var indexModel = require('../model/indexModel')

    router.get("/",(req,res,next)=>{
    res.send("<h1>WEB server invoked Successfully...</h1>" )        
 })


router.post('/userSignUp',(req,res,next)=>{
    
    var collection_name='user';
    indexModel.userSignUp(collection_name,req.body).then((result)=>{
        if(result.status==1)
            res.json({'response':'User register successfully'})
        else
            res.json({'response':'User already exists , please try with new'})            
    }).catch((err)=>{
        res.json({'response':'Registration failed'})
    })        
})

 router.get("/getusers",(req,res,next)=>{

     indexModel.getusers().then((result)=>{
   res.json({'response':result});
   
});
})

router.post("/deleteUser/:id",(req,res,next)=>{
    console.log('req.body',req.params.id)
    indexModel.deleteuser(req.params.id)
})

router.get("/getUserDataById/:id",(req,res,next)=>{
console.log('req.body',req.params.id)
    console.log("hello1");
    indexModel.getusers().then((result)=>{
            res.json({'response':result.filter(x=>x._id == req.params.id)[0]});
});
})
module.exports = router