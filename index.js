var randomNum = Math.floor(Math.random() *6)+1;
var randomimage=("image/dice-"+randomNum+".png");
var img1=document.querySelectorAll("img")[0];

img1.setAttribute("src",randomimage);

var randomnum2= Math.floor(Math.random()*6)+1;
var randomimage2=("image/dice-"+randomnum2+".png");
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomimage2);
var heading=document.querySelector("h1")

if(randomNum>randomnum2){
    heading.innerHTML="Player 1 wins!!!";
    heading.style.color="red";
    heading.style.textShadow = " 3px 0 rgba(255, 0, 0, 0.5) ";    
}
else if (randomnum2>randomNum){
    heading.innerHTML="Player 2 wins!!!";
    heading.style.color="blue";
    heading.style.textShadow=" 3px 0 rgba(0, 0, 255, 0.5)";
}
else{
    heading.innerHTML="Draw play again";
    heading.style.color="white";
    heading.style.textShadow="3px 0 pink";
}

var refreshbtn= document.getElementById("refresh");
refreshbtn.addEventListener("click",function(){
location.reload();
});