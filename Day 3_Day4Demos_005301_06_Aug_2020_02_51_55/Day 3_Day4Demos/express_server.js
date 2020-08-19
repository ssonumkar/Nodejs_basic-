var express = require('express');
var morgan = require('morgan');
var app = new express();
app.use(morgan('dev')); //set middlewares 
app.use(express.static('public')); //serve all static content from this folder
app.get('/',(req,res)=>{
    //res.send('Welcome to my Express Application'); //send Text response 
    res.sendFile('index.html'); //pass contents of the file to the brwoser 
})
function getProducts(req,res,next){
    //var id= req.query.id;
    var products = ['laptops','computer','tablets']; //db call 
    req.products = products; //pass data to next handler
    next(); //next handler in line
}
app.get('/products',getProducts,(req,res,next)=>{ 
    //Search the db for a record with id=23
    res.send('Products Information for '+req.products);
})
app.post('/products',(req,res)=>{
    res.send('Added a new Product');
})
app.get('/contacts',(req,res)=>{
    res.send('Contacts Information');
})
//Place this code at the end of the routing config 
app.use((req,res,next)=>{
    res.status(404).send('Path not found');
})
//Handle server side errors
app.use((error,req,res,next)=>{
    res.status(501).send('Internal Server Error');
})
app.listen(3000,()=>{
    console.log('Server listening on 3000');
})