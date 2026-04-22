function fetchData(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve("Data recieved from server")
        },2000)
    })
}
async function getData(){
    console.log("fetching data")
    let data=await fetchData();
    console.log(data)

}
getData()