var fs = require('fs');
var writeStream = fs.createWriteStream('sample.txt');
var writeStream2 = fs.createWriteStream('DataCopy.txt');


writeStream.write('Tutorial on streams');
writeStream.write('Tutorial on streams');
writeStream.write('Tutorial on streams');
writeStream.write('Tutorial on streams');
writeStream.end(); //no more writes after this. 
writeStream.on('finish',()=>{
    console.log('Writes complete');
})

var rs = fs.createReadStream('Data.txt');
rs.pipe(writeStream2); //streams can be piped