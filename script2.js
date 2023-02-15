// Game Page
var quit = document.getElementById("quit");
var timer = document.getElementById("timer");
var gamebox = document.getElementById("game");
var scorebox = document.getElementById("scorebox");
var restart = document.getElementById("restart");
var gotohome = document.getElementById("gthome");
var time = 60;
quit.addEventListener('click', ()=>{
    history.back();
    history.back();
});
gotohome.addEventListener('click' , ()=>{
    history.back();
    history.back();
});
restart.addEventListener('click' , ()=>{
    window.open("game.html", "_parent");
})
setInterval(()=>{
    timer.innerText = time;
    if(time == 0){
        gamebox.style.display = "none";
        scorebox.style.zIndex = "10";
        quit.style.display = "none";
        timer.innerText = "--";
        clearInterval();
    }
    else{
        time--;
    }
}, 1000);