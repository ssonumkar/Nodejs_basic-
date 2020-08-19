var fs = require('fs');
var readstream = fs.createReadStream('Data.txt',{encoding:'utf-8',highWaterMark:100});
readstream.on('data',(datachunk)=>{ //emitted 4 times 
    console.log('DataChunk: '+datachunk);
    //ws.write(datachunk);
});
readstream.on('end',(datachunk)=>{
    console.log('Finished reading the file');
})
readstream.on('error',(errorObj)=>{
    //error handling
})