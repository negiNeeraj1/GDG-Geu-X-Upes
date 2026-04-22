// var oneLinerJoke = require('one-liner-joke');
// var getRandomJoke = oneLinerJoke.getRandomJoke();
// console.log(getRandomJoke)

// // https://portfolio/user/2

// understanding express.js

const express= require('express');
const app=express();

app.use((req,res,next)=>{
    console.log("Hello i'm middleware");
    next();
})
const checkAuth=((req,res,next)=>{
    console.log("checking authentication");
    next();     
})
// app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Hello world aur kya haal chaal")
})
app.get('/contact',(req,res)=>{
    
    res.send("Hello i am contact page")
})
console.log("this is contact")
app.get('/about',(req,res)=>{
    res.send("Hello i am about page")
})

//authentication



// app.post('/user',(req,res)=>{
//     res.send("user created");
// })
let port=2000;
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});

