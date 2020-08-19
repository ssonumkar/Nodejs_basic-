function readFile(callback){
    console.log('Reading a large file');
    setTimeout(function () {
        for (var i = 0; i < 9999999999; i++) {
            var data = "Hello world";
        }
		console.log('Finished reading the file');
        callback(data);
    }, 2000);
     
}
function processFileContents(filecontents){
    console.log('Processing File Contents'+filecontents);
}

function computeSum(){
    console.log('Computing Sum of numbers');
}

console.log('Program callstack starts');
var fileData = readFile(processFileContents);
//processFileContents(fileData);
computeSum();
console.log('Program callstack Ends');