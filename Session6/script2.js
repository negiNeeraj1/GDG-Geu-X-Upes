console.log("App started")
setInterval(()=>{
    let time=new Date().toLocaleTimeString();
    document.querySelector("h3").innerText=time;

},1000)

// form handling
let form = document.getElementById("form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    console.log("form submitted");

    let name=document.getElementById("name");
    let email=document.getElementById("email");
    let password=document.getElementById("password");
    let message=document.getElementById("message");

    console.log(name.value,email.value,password.value,message.value);

   // validation

   if(name.value==="" || email.value==="" || password.value===""){
    message.innerText="All fields are required";
    message.classList.add("error");

    if(name.value===""){
        name.classList.add("highlight");
    }
    if(email.value===""){
        email.classList.add("highlight");

    }
    if(password.value===""){
        password.classList.add("highlight");
    }
    console.error("validation failed");
   }

   else if( password.value.length<6){
    message.innerText="Password must be atleast 6 characters";
    message.classList.add("error");
    message.classList.add("highlight");
    console.error("validation failed");

   }
   else{
    message.innerText="Form submitted successfully";
    message.classList.remove("error");
    message.classList.add("success");
    console.log("success");

    setTimeout(()=>{
        form.reset();
        message.innerText="";
        
    },2000)
   }
})