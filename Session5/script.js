function hello2(){
    console.log("Hi i am hello2")
}
function hello(){
    console.log("Hello all")
    hello2()
}
// let msg=hello()
// console.log(msg)


let name=function(){
    hello()
}

name()
// let add=function(a,b){
//     return a+b
// }
// console.log(add(2,3))

// Arrow function
let sub= (a,b)=>{
    console.log(a-b)
}
sub(2,3)