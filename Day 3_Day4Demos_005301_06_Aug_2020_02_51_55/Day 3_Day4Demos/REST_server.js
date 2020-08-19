var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var user = require('./model/user');
var app = new express();
var router = express.Router();
mongoose.connect('mongodb://localhost:27017/userdb',{useNewUrlParser:true});
//var users = [{name:'Jane',age:32},{name:'Tia',age:42},{name:'Thomas',age:22}];
app.use(bodyParser.urlencoded({extended:true})); //converts it into obj

router.route('/users')
.get((req,res)=>{
    //send back list of users in json
    //fetch documents from users collection
    user.find({},(err,users)=>{
        if(err)
            res.json({msg:'Error in fetching data from database'});
        else
            res.json(users); 
    })
   // res.json(users); 
})
.post((req,res)=>{
    var obj = new user(req.body);
    obj.save((err)=>{
        if(err)
            res.json({msg:'Error in saving data into the database',errors:err});
        else
            res.json({msg:'New User added successfully into the database'});
    })
})
router.route('/user/:name')
.get((req,res)=>{
    user.findOne({name:req.params.name},(err,user)=>{
        if(err)
            res.status(500).json({msg:'Error in fetching data from database'});
        else if(!user)
            res.status(404).json({msg:'User not found'});
        else
            res.json(user); 
    })
})
.put((req,res)=>{
    user.findOneAndUpdate({name:req.params.name},{age:req.body.age},(err,user)=>{
        if(err)
            res.json({msg:'Error in updating data in database'});
        else
            res.json({msg:'User updated successfully in database'});
    })
})
.delete((req,res)=>{
    user.findOneAndDelete({name:req.params.name},(err,user)=>{
        if(err)
            res.json({msg:'Error in Deleting data in database'});
        else
            res.json({msg:'User deleted successfully in database'});
    })
})

app.use('/api',router); //middleware to direct all req with '/api' to be handled by router
app.listen(3000,()=>{
    console.log('Server listening on 3000');
})
