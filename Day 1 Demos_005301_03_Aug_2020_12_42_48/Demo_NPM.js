var math = require('mathjs');
console.log(math.log(1000, 10));               
console.log(math.sqrt(64));
console.log(math.chain(3)
    .add(4)
    .multiply(2)
    .done());

//express, body-parser, morgan,mongoose,socket.io,nodemon 