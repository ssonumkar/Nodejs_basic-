module.exports = function(name,age){ //constructor function
    this.name = name;
    this.age = age;
    this.getName = function(){
        return this.name;
    }
}