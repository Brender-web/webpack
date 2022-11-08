
// function muilt(x,y,z){
//     return x*y*z;
// }
// mult(3,4,5);   //60
// mult(3,4,5,6);  //oops

function mult(...args){
    if (args.length <= 2){
        return args[0]*args[1]
    }
    return args[0]* mult(...args.slice(1))
}
console.log(mult(3,4,5));   //60
console.log(mult(3,4,5,6)); //oops 