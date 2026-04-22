let promise= new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("Task completed");
    }
    else{
        reject("Task failed");
    }
});
promise
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })