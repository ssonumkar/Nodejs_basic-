var express = require('express');
var bodyParser = require('body-parser');
var app = new express();
app.use(bodyParser.urlencoded({extended:true})); //converts it into obj
app.use(bodyParser.json({extended:true})); //converts it into obj

app.set('view engine','ejs'); //render all ejs files
var users = [{name:'Jane',age:32},{name:'Tia',age:42},{name:'Thomas',age:22}];

app.get('/',(req,res)=>{
    //res.send('Welcome to my Express Application'); //send Text response 
    //res.sendFile('index.html'); //pass contents of the file to the brwoser 
    res.render('index',{username:'Tina',userArray:users});
})
app.get('/adduser',(req,res)=>{
    res.render('adduser');
})
app.post('/adduser',(req,res)=>{
    //read the request body --name and age
    var obj = new Object();
    obj.name = req.body.name;
    obj.age = req.body.age;
    users.push(obj);   //add a new record to the user array
    res.redirect('/');
})
app.listen(3000,()=>{
    console.log('Server listening on 3000');
})