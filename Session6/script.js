// let el= document.querySelector('#title')
// console.log(el.textContent);
// el.innerHTML="hii";
// console.log(el.textContent);

// let para= document.createElement("p");
// para.textContent="hello";

// document.body.appendChild(para);
// para.remove();

// function showMessage(){
//     alert("button clicked");
//     console.log("button clicked");
// }

// let btn= document.querySelector('button');
// btn.addEventListener("click",function(){
//     alert("button clicked");
//     console.log("button clicked");

// })

// let name= document.getElementById("name");

// let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
//     console.log(name.value);
// })

// form validation

// let form=document.querySelector("form");
// let username=document.querySelector("#username");
// let password=document.querySelector("#password");
// let submit=document.querySelector("submit");

// let email=document.querySelector("#email").value;

// if(!email.includes("@")){
//     alert("invalid email");
// }


// form.addEventListener("submit",function(e){
//     let name=username.value;
//     if(name===""){
//         alert("name should not be empty")
//     }
//     else{
//         alert("form submitted");
//     }
// })


// setTimeout(function(){
//     console.log("hello");
// },5000)

// setInterval(function(){
//     console.log("hii !");
// },2000)



// let h1=document.querySelector("#text");
// setTimeout(()=>{
//     h1.innerText="Loaded";
// },2000);


// let  h2=document.querySelector("#clock");
// setInterval(()=>{
//     let time=new Date().toLocaleTimeString();
//     h2.innerText=time;
// },1000);


let clock=document.querySelector("h2");
console.log(clock)
clock.classList.add("active")
console.log(clock)
clock.classList.remove("active");
console.log(clock)