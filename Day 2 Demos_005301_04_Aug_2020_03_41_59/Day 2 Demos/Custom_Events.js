var eventemitter = require('events').EventEmitter;
var myemitter = new eventemitter();
var counter=0;
myemitter.on('move',(value)=>{
    console.log('moving...with value'+value);
})
setInterval(()=>{
    myemitter.emit('move',counter++); //trigger the event
},2000)

//Excercise: Try to create a class that extends the EventEmitter 

