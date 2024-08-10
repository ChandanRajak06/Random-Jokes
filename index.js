const URL = 'https://official-joke-api.appspot.com/random_joke';

let one = document.querySelector(".first");
let two = document.querySelector(".last");
let btn = document.querySelector("Button");

const showData = async() =>{
     console.log("Please Wait While Data is Loaded...!");
     let res = await fetch(URL);
    //  console.log(res)
     let data = await res.json();
    //  console.log(data)
     one.innerHTML=data.setup;
     two.innerHTML=data.punchline;
}

btn.addEventListener('click',showData);