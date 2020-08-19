//Basics of Javascript
//variables,functions,params, return, for loops,if-else,objects,JSON
//ES5 javascript or ES6 
//typescript --->transpile 

//Inbuilt modules: os,http,https,fs,events
var os = require('os'); 
var cal = require('./calculator');
var user = require('./user');

console.log('Hello World to Node.js');
console.log('os type'+os.type());
console.log('Host name'+os.hostname());
console.log('tmp dir'+os.tmpdir());

console.log('Sum of 2 nums: '+cal.sum(32,4));
console.log('Value of Pi: '+cal.pi);

var userobj = new user('Tina',34);
console.log('User Name'+userobj.getName());

