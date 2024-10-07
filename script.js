const author=document.getElementById("author");
const quote=document.getElementById("quote");
const api_url="https://api.quotable.io/random";



async function getquote(url){
    const response= await fetch(url);
    var data=await response.json();
    console.log(data);
    quote.classList.add("transitions");
    author.classList.add("transitions");
    quote.innerHTML=data.content;
    author.innerHTML=data.author;
}

getquote(api_url);


function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML + "-----" + author.innerHTML,"Tweet Window","width=600","hegiht=300")
}