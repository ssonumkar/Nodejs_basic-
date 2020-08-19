var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection',(socket)=>{
    console.log('New connection received');
    //Send data as custom events
    //socket.emit('stockupdate',getStockValue());
    setInterval(()=>{
        io.emit('stockupdate',getStockValue());
    },5000);    
})

function getStockValue(){
    return Math.floor(Math.random() * 1000);
}


http.listen(8000, function() {
    console.log('Listening on *:8000');
});