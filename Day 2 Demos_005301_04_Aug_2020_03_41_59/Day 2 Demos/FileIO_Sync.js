var fs = require('fs');
console.log('Program starts');
try {
    var filecontents = fs.readFileSync('Data.txt','utf-8');
    console.log(filecontents);
} catch (error) {
    //error handling
}
if(fs.existsSync('Temp'))
    fs.rmdirSync('Temp')

fs.mkdirSync('Temp');
console.log('Program ends');
