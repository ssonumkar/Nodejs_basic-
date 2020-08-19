//new module itself

function sum(n1,n2){
    return n1+n2;
}
function multiply(n1,n2){
    return n1*n2;
}
function square(n){
    return multiply(n*n);
}
const pi=3.14;
module.exports = {
    sum,square,pi
}