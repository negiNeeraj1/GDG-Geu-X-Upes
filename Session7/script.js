// try{
//     let x=y;
// }
// catch(err){
//     console.log("error occured");
// }
// finally{
//     console.log("always")
// }

// destructuring...
// let arr=[2,4,5]
// let [a,b]=arr;
// console.log(a)
// console.log(b)
// console.log(c)


// spread operator->
// let arr=[1,2,3,4,5];
// let arr2=[...arr,6,7]
// console.log(arr2)

// let user={
//     name:"Neeraj",
//     age:23
// }
// let {name,age}=user;
// console.log(name)


function outer(){
    let count=0;
    return function inner(){
        count++;
        console.log(count);

    }
}
let fn=outer();
fn();
fn();
fn();