// make a pure function 'bar(..) to wrap around 'foo(..)',

const { MultiCompiler } = require("webpack");


// function bar(x,y){
//     var z;
// function foo(x)
//  y++   
//  z = x*y
// }
// return[y,z]

// var y= 5+z;
//  foo(20)
//  console.log(z);


 //#instructions
 //1.Define 'foo(..)'so that it produces a function which remembers
 // only the first two arguiments that were passed to 'foo(..)', and always adds them together
function foo(x,y){
    return function(){
        return x+y
    }
}
var x = foo(3,4);
x();   //7
x();   //7
console.log(x)

// Turn mult (...)into a recursive function that can work on as many arguiments as neccesary.
function muilt(x,y,z){
    return x*y*z;
}
muilt(3,4,5);   //60
muilt(3,4,5,6);  //oops