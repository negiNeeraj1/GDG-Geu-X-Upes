async function getCat(){
    try{
        console.log("Fetching cat image")

        let response =await fetch("https://api.thecatapi.com/v1/images/search ");
        let data=await response.json();
        let imageUrl=data[0].url;

        document.getElementById("catImg").src=imageUrl;
    
      
    }
    catch(err){
        console.log(err)
    
    }
}

// joke funx
async function getJoke(){
    try{
        console.log("Fetching joke")
        let response=await fetch("https://v2.jokeapi.dev/joke/Any ")
        let data=await response.json();

        let jokeText=data.setup+"🤔"+data.delivery;
        document.getElementById("joke").innerHTML=jokeText;
    }
    catch(err){
        console.log(err)
    
    }
}