var fs = require('fs');
//var fs = require('fs').promises;
var util = require('util');
/*fs.readFile('Data.txt').then((filecontents)=>{
    console.log(filecontents);
}).catch(err=>console.log(err));*/
const readFilepromiseObj = util.promisify(fs.readFile);
//All the methods return a Promise object 
readFilepromiseObj('Data.txt','utf-8').then((filecontents)=>{
    console.log(filecontents);
}).catch(err=>console.log(err));
//Easier to read
//Easier to debug
//Avoids nested callbacks
