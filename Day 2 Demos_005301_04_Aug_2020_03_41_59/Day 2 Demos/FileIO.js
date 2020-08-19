var fs = require('fs'); //Node handles all IO operations in ASynch fashion
console.log('Program starts');
fs.readFile("Data.txt",'utf-8',function(err,filecontents){
    //executed only after file is read
    //error first callbacks 
    if(err)
        console.log('Error in reading file'+err.message);
    else    
        console.log(filecontents);
});
console.log('Program ends');
//fs.appendFile
fs.writeFile('NewData.txt',"Hello to File System tutorial",(err)=>{
    if(err)
        console.log('Error in writing to file'+err.message);
    else    
        console.log("Written to file");
})
fs.stat('Data.txt',(err,stats)=>{
    console.log('File size'+stats.size);
    console.log('Creation time'+stats.birthtime);
    console.log('Accessed time'+stats.atime);
    console.log('Is File?'+stats.isFile());
    console.log('Is Dir?'+stats.isDirectory());
})
fs.unlink('temp.txt',(err)=>{
    console.log('Deleted file');
})
fs.open('Data.txt',(err,fd)=>{
    fs.readFile(fd,'utf-8',(err,contents)=>{

    })
})