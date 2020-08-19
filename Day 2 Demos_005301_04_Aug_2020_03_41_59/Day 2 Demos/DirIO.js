var fs = require('fs');
fs.readdir('.',(err,files)=>{
    if(err)
        console.log('Error reading dir');
    else    
        console.log('Files: '+files);
})
fs.mkdir('Temp',(err)=>{
    console.log('Created Temp');
})
fs.rmdir('Temp',(err)=>{
    console.log('Deleted Temp');
})