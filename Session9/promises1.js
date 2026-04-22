// function step1(){
//     return new Promise(resolve=>{
//         setTimeout(()=>
//         {
//             console.log("Step1");
//         },1000)
//     })
// }

// function step2(){
//     return new Promise(resolve=>{
//         setTimeout(()=>
//         {
//             console.log("Step2");
//         },1000)
    
//     })
// }

// function step3(){
//     return new Promise(resolve=>{
//         setTimeout(()=>
//         {
//             console.log("Step3");
//         },1000)
//     })
// }

// step1()
// .then(step2)
// .then(step3)
// .catch(err=>console.log(err))




function step1(){
    return new Promise(resolve=>{
        setTimeout(()=>
        {
            console.log("Step1");
            resolve();
        },1000)

    })
}
async function runSteps(){
    let res=await step1();
    console.log(res);
    
    let res2=await step1();
    console.log(res2);
}
runSteps();