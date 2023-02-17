// Game Page
// DOM For Rats
let rat1 = document.getElementById("rat1");
let rat2 = document.getElementById("rat2");
let rat3 = document.getElementById("rat3");
let rat4  = document.getElementById("rat4");
let rat5 = document.getElementById("rat5");
let rat6 = document.getElementById("rat6");
let rat7 = document.getElementById("rat7");
let rat8 = document.getElementById("rat8");
let rat9 = document.getElementById("rat9");
let rat10 = document.getElementById("rat10");
let rat11 = document.getElementById("rat11");
let rat12 = document.getElementById("rat12");
let rat13 = document.getElementById("rat13");
let rat14 = document.getElementById("rat14");
let rat15 = document.getElementById("rat15");
let rat16 = document.getElementById("rat16");
let rat17 = document.getElementById("rat17");
let rat18 = document.getElementById("rat18");
let rat19 = document.getElementById("rat19");
let rat20 = document.getElementById("rat20");
let rat21 = document.getElementById("rat21");
let rat22 = document.getElementById("rat22");
let rat23 = document.getElementById("rat23");
let rat24 = document.getElementById("rat24");
let rat25 = document.getElementById("rat25");
let rat26 = document.getElementById("rat26");
let rat27 = document.getElementById("rat27");
let rat28 = document.getElementById("rat28");
let rat29 = document.getElementById("rat29");
let rat30 = document.getElementById("rat30");
let rat31 = document.getElementById("rat31");
let rat32 = document.getElementById("rat32");
let rat33 = document.getElementById("rat33");
let rat34 = document.getElementById("rat34");
let rat35 = document.getElementById("rat35");
let rat36 = document.getElementById("rat36");
let rat37 = document.getElementById("rat37");
let rat38 = document.getElementById("rat38");
let rat39 = document.getElementById("rat39");
let rat40 = document.getElementById("rat40");
let rat41 = document.getElementById("rat41");
let rat42 = document.getElementById("rat42");
let rat43 = document.getElementById("rat43");
let rat44 = document.getElementById("rat44");
let rat45 = document.getElementById("rat45");
let rat46 = document.getElementById("rat46");
let rat47 = document.getElementById("rat47");
let rat48 = document.getElementById("rat48");
let rat49 = document.getElementById("rat49");
let rat50 = document.getElementById("rat50");
let rat51 = document.getElementById("rat51");
let rat52 = document.getElementById("rat52");
let rat53 = document.getElementById("rat53");
let rat54 = document.getElementById("rat54");
let rat55 = document.getElementById("rat55");
let rat56 = document.getElementById("rat56");
let rat57 = document.getElementById("rat57");
let rat58 = document.getElementById("rat58");
let rat59 = document.getElementById("rat59");
let rat60 = document.getElementById("rat60");
// DOM For Game Page Score and timer
var quit = document.getElementById("quit");
var timer = document.getElementById("timer");
var gamebox = document.getElementById("game");
var scorebox = document.getElementById("scorebox");
var restart = document.getElementById("restart");
var gotohome = document.getElementById("gthome");
var scored = document.getElementById("score");
var tscore = document.getElementById("scorevalue");
// Variables
var time = 60;
var turn = 1;
var score = 00;
// --Main Part--
// Function
function change(){
    for(let i = 1; i<=60; i++){
        let positionT = Math.floor(Math.random() * 50);
        let postionL = Math.floor(Math.random() * 50);
        document.getElementById("rat" + i).style.top = positionT + "%";
        document.getElementById("rat" + i).style.left = postionL + "%";
    }
}
function back(){
    history.back();
    history.back();
}
// Button Functions
quit.addEventListener('click', back);
gotohome.addEventListener('click' , back);
restart.addEventListener('click' , ()=>{
    window.open("game.html", "_parent");
})
// Time Function
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
setTimeout(change, 1);
setInterval(()=>{
    for(let i = 1; i<=60; i++){
        let positionT = Math.floor(Math.random() * 50);
        let postionL = Math.floor(Math.random() * 50);
        document.getElementById("rat" + i).style.top = positionT + "%";
        document.getElementById("rat" + i).style.left = postionL + "%";
    }
    if(turn==1){
        rat1.style.visibility = "visible";
        rat2.style.visibility = "visible";
        rat3.style.visibility = "visible";
        rat4.style.visibility = "visible";
        rat5.style.visibility = "visible";
        rat6.style.visibility = "visible";
        rat7.style.visibility = "visible";
        rat8.style.visibility = "visible";
        rat9.style.visibility = "visible";
        rat10.style.visibility = "visible";
        rat11.style.visibility = "visible";
        rat12.style.visibility = "visible";
        rat13.style.visibility = "visible";
        rat14.style.visibility = "visible";
        rat15.style.visibility = "visible";
        rat16.style.visibility = "visible";
        rat17.style.visibility = "visible";
        rat18.style.visibility = "visible";
        rat19.style.visibility = "visible";
        rat20.style.visibility = "visible";
        rat21.style.visibility = "hidden";
        rat22.style.visibility = "hidden";
        rat23.style.visibility = "hidden";
        rat24.style.visibility = "hidden";
        rat25.style.visibility = "hidden";
        rat26.style.visibility = "hidden";
        rat27.style.visibility = "hidden";
        rat28.style.visibility = "hidden";
        rat29.style.visibility = "hidden";
        rat30.style.visibility = "hidden";
        rat31.style.visibility = "hidden";
        rat32.style.visibility = "hidden";
        rat33.style.visibility = "hidden";
        rat34.style.visibility = "hidden";
        rat35.style.visibility = "hidden";
        rat36.style.visibility = "hidden";
        rat37.style.visibility = "hidden";
        rat38.style.visibility = "hidden";
        rat39.style.visibility = "hidden";
        rat40.style.visibility = "hidden";
        rat41.style.visibility = "hidden";
        rat42.style.visibility = "hidden";
        rat43.style.visibility = "hidden";
        rat44.style.visibility = "hidden";
        rat45.style.visibility = "hidden";
        rat46.style.visibility = "hidden";
        rat47.style.visibility = "hidden";
        rat48.style.visibility = "hidden";
        rat49.style.visibility = "hidden";
        rat50.style.visibility = "hidden";
        rat51.style.visibility = "hidden";
        rat52.style.visibility = "hidden";
        rat53.style.visibility = "hidden";
        rat54.style.visibility = "hidden";
        rat55.style.visibility = "hidden";
        rat56.style.visibility = "hidden";
        rat57.style.visibility = "hidden";
        rat58.style.visibility = "hidden";
        rat59.style.visibility = "hidden";
        rat60.style.visibility = "hidden";
    }
    else if(turn==2){
        rat1.style.visibility = "hidden";
        rat2.style.visibility = "hidden";
        rat3.style.visibility = "hidden";
        rat4.style.visibility = "hidden";
        rat5.style.visibility = "hidden";
        rat6.style.visibility = "hidden";
        rat7.style.visibility = "hidden";
        rat8.style.visibility = "hidden";
        rat9.style.visibility = "hidden";
        rat10.style.visibility = "hidden";
        rat11.style.visibility = "hidden";
        rat12.style.visibility = "hidden";
        rat13.style.visibility = "hidden";
        rat14.style.visibility = "hidden";
        rat15.style.visibility = "hidden";
        rat16.style.visibility = "hidden";
        rat17.style.visibility = "hidden";
        rat18.style.visibility = "hidden";
        rat19.style.visibility = "hidden";
        rat20.style.visibility = "hidden";
        rat21.style.visibility = "visible";
        rat22.style.visibility = "visible";
        rat23.style.visibility = "visible";
        rat24.style.visibility = "visible";
        rat25.style.visibility = "visible";
        rat26.style.visibility = "visible";
        rat27.style.visibility = "visible";
        rat28.style.visibility = "visible";
        rat29.style.visibility = "visible";
        rat30.style.visibility = "visible";
        rat31.style.visibility = "visible";
        rat32.style.visibility = "visible";
        rat33.style.visibility = "visible";
        rat34.style.visibility = "visible";
        rat35.style.visibility = "visible";
        rat36.style.visibility = "visible";
        rat37.style.visibility = "visible";
        rat38.style.visibility = "visible";
        rat39.style.visibility = "visible";
        rat40.style.visibility = "visible";
        rat41.style.visibility = "hidden";
        rat42.style.visibility = "hidden";
        rat43.style.visibility = "hidden";
        rat44.style.visibility = "hidden";
        rat45.style.visibility = "hidden";
        rat46.style.visibility = "hidden";
        rat47.style.visibility = "hidden";
        rat48.style.visibility = "hidden";
        rat49.style.visibility = "hidden";
        rat50.style.visibility = "hidden";
        rat51.style.visibility = "hidden";
        rat52.style.visibility = "hidden";
        rat53.style.visibility = "hidden";
        rat54.style.visibility = "hidden";
        rat55.style.visibility = "hidden";
        rat56.style.visibility = "hidden";
        rat57.style.visibility = "hidden";
        rat58.style.visibility = "hidden";
        rat59.style.visibility = "hidden";
        rat60.style.visibility = "hidden";
    }
    else if(turn == 3){
        rat1.style.visibility = "hidden";
        rat2.style.visibility = "hidden";
        rat3.style.visibility = "hidden";
        rat4.style.visibility = "hidden";
        rat5.style.visibility = "hidden";
        rat6.style.visibility = "hidden";
        rat7.style.visibility = "hidden";
        rat8.style.visibility = "hidden";
        rat9.style.visibility = "hidden";
        rat10.style.visibility = "hidden";
        rat11.style.visibility = "hidden";
        rat12.style.visibility = "hidden";
        rat13.style.visibility = "hidden";
        rat14.style.visibility = "hidden";
        rat15.style.visibility = "hidden";
        rat16.style.visibility = "hidden";
        rat17.style.visibility = "hidden";
        rat18.style.visibility = "hidden";
        rat19.style.visibility = "hidden";
        rat20.style.visibility = "hidden";
        rat21.style.visibility = "hidden";
        rat22.style.visibility = "hidden";
        rat23.style.visibility = "hidden";
        rat24.style.visibility = "hidden";
        rat25.style.visibility = "hidden";
        rat26.style.visibility = "hidden";
        rat27.style.visibility = "hidden";
        rat28.style.visibility = "hidden";
        rat29.style.visibility = "hidden";
        rat30.style.visibility = "hidden";
        rat31.style.visibility = "hidden";
        rat32.style.visibility = "hidden";
        rat33.style.visibility = "hidden";
        rat34.style.visibility = "hidden";
        rat35.style.visibility = "hidden";
        rat36.style.visibility = "hidden";
        rat37.style.visibility = "hidden";
        rat38.style.visibility = "hidden";
        rat39.style.visibility = "hidden";
        rat40.style.visibility = "hidden";
        rat41.style.visibility = "visible";
        rat42.style.visibility = "visible";
        rat43.style.visibility = "visible";
        rat44.style.visibility = "visible";
        rat45.style.visibility = "visible";
        rat46.style.visibility = "visible";
        rat47.style.visibility = "visible";
        rat48.style.visibility = "visible";
        rat49.style.visibility = "visible";
        rat50.style.visibility = "visible";
        rat51.style.visibility = "visible";
        rat52.style.visibility = "visible";
        rat53.style.visibility = "visible";
        rat54.style.visibility = "visible";
        rat55.style.visibility = "visible";
        rat56.style.visibility = "visible";
        rat57.style.visibility = "visible";
        rat58.style.visibility = "visible";
        rat59.style.visibility = "visible";
        rat60.style.visibility = "visible";
    }
    else if(turn == 4){
        rat1.style.visibility = "visible";
        rat2.style.visibility = "visible";
        rat3.style.visibility = "visible";
        rat4.style.visibility = "visible";
        rat5.style.visibility = "visible";
        rat6.style.visibility = "visible";
        rat7.style.visibility = "visible";
        rat8.style.visibility = "visible";
        rat9.style.visibility = "visible";
        rat10.style.visibility = "visible";
        rat11.style.visibility = "visible";
        rat12.style.visibility = "visible";
        rat13.style.visibility = "visible";
        rat14.style.visibility = "visible";
        rat15.style.visibility = "visible";
        rat16.style.visibility = "visible";
        rat17.style.visibility = "visible";
        rat18.style.visibility = "visible";
        rat19.style.visibility = "visible";
        rat20.style.visibility = "visible";
        rat21.style.visibility = "visible";
        rat22.style.visibility = "visible";
        rat23.style.visibility = "visible";
        rat24.style.visibility = "visible";
        rat25.style.visibility = "visible";
        rat26.style.visibility = "visible";
        rat27.style.visibility = "visible";
        rat28.style.visibility = "visible";
        rat29.style.visibility = "visible";
        rat30.style.visibility = "visible";
        rat31.style.visibility = "hidden";
        rat32.style.visibility = "hidden";
        rat33.style.visibility = "hidden";
        rat34.style.visibility = "hidden";
        rat35.style.visibility = "hidden";
        rat36.style.visibility = "hidden";
        rat37.style.visibility = "hidden";
        rat38.style.visibility = "hidden";
        rat39.style.visibility = "hidden";
        rat40.style.visibility = "hidden";
        rat41.style.visibility = "hidden";
        rat42.style.visibility = "hidden";
        rat43.style.visibility = "hidden";
        rat44.style.visibility = "hidden";
        rat45.style.visibility = "hidden";
        rat46.style.visibility = "hidden";
        rat47.style.visibility = "hidden";
        rat48.style.visibility = "hidden";
        rat49.style.visibility = "hidden";
        rat50.style.visibility = "hidden";
        rat51.style.visibility = "hidden";
        rat52.style.visibility = "hidden";
        rat53.style.visibility = "hidden";
        rat54.style.visibility = "hidden";
        rat55.style.visibility = "hidden";
        rat56.style.visibility = "hidden";
        rat57.style.visibility = "hidden";
        rat58.style.visibility = "hidden";
        rat59.style.visibility = "hidden";
        rat60.style.visibility = "hidden";
    }
    else if(turn == 5){
        rat1.style.visibility = "visible";
        rat2.style.visibility = "visible";
        rat3.style.visibility = "visible";
        rat4.style.visibility = "visible";
        rat5.style.visibility = "visible";
        rat6.style.visibility = "visible";
        rat7.style.visibility = "visible";
        rat8.style.visibility = "visible";
        rat9.style.visibility = "visible";
        rat10.style.visibility = "visible";
        rat11.style.visibility = "visible";
        rat12.style.visibility = "visible";
        rat13.style.visibility = "visible";
        rat14.style.visibility = "visible";
        rat15.style.visibility = "visible";
        rat16.style.visibility = "visible";
        rat17.style.visibility = "visible";
        rat18.style.visibility = "visible";
        rat19.style.visibility = "visible";
        rat20.style.visibility = "visible";
        rat21.style.visibility = "visible";
        rat22.style.visibility = "visible";
        rat23.style.visibility = "visible";
        rat24.style.visibility = "visible";
        rat25.style.visibility = "visible";
        rat26.style.visibility = "visible";
        rat27.style.visibility = "visible";
        rat28.style.visibility = "visible";
        rat29.style.visibility = "visible";
        rat30.style.visibility = "visible";
        rat31.style.visibility = "visible";
        rat32.style.visibility = "visible";
        rat33.style.visibility = "visible";
        rat34.style.visibility = "visible";
        rat35.style.visibility = "visible";
        rat36.style.visibility = "visible";
        rat37.style.visibility = "visible";
        rat38.style.visibility = "visible";
        rat39.style.visibility = "visible";
        rat40.style.visibility = "visible";
        rat41.style.visibility = "visible";
        rat42.style.visibility = "visible";
        rat43.style.visibility = "visible";
        rat44.style.visibility = "visible";
        rat45.style.visibility = "visible";
        rat46.style.visibility = "visible";
        rat47.style.visibility = "visible";
        rat48.style.visibility = "visible";
        rat49.style.visibility = "visible";
        rat50.style.visibility = "visible";
        rat51.style.visibility = "visible";
        rat52.style.visibility = "visible";
        rat53.style.visibility = "visible";
        rat54.style.visibility = "visible";
        rat55.style.visibility = "visible";
        rat56.style.visibility = "visible";
        rat57.style.visibility = "visible";
        rat58.style.visibility = "visible";
        rat59.style.visibility = "visible";
        rat60.style.visibility = "visible";
    }
    else{
        clearInterval();
    }
    turn++;
},10000);
rat1.addEventListener('click' , ()=>{
    score++;
    scored.innerText = score;
    tscore.innerText = score;
    rat1.style.visibility = "hidden";
});
rat4.addEventListener('click' , ()=>{
    score++;
    scored.innerText = score;
    tscore.innerText = score;
    rat4.style.visibility = "hidden";
})
rat7.addEventListener('click' , ()=>{
    score++;
    scored.innerText = score;
    tscore.innerText = score;
    rat7.style.visibility = "hidden";
})
rat10.addEventListener('click' , ()=>{
    score++;
    scored.innerText = score;
    tscore.innerText = score;
    rat10.style.visibility = "hidden";
})
rat13.addEventListener('click' , ()=>{
    score++;
    scored.innerText = score;
    tscore.innerText = score;
    rat13.style.visibility = "hidden";
})
rat16.addEventListener('click', ()=>{
    score++;
    scored.innerText = score;
    tscore.innerText = score;
    rat16.style.visibility = "hidden";
})
rat19.addEventListener('click' , ()=>{
    score++;
    scored.innerText = score;
    tscore.innerText = score;
    rat19.style.visibility = "hidden";
})
rat22.addEventListener('click' , ()=>{
    score++;
    scored.innerText = score;
    tscore.innerText = score;
    rat22.style.visibility = "hidden";
})
rat25.addEventListener('click' , ()=>{
    score++;
    scored.innerText = score;
    tscore.innerText = score;
    rat25.style.visibility = "hidden";
})
rat28.addEventListener('click' , ()=>{
    score++;
    scored.innerText = score;
    tscore.innerText = score;
    rat28.style.visibility = "hidden";
})
rat31.addEventListener('click' , ()=>{
    score++;
    scored.innerText = score;
    tscore.innerText = score;
    rat31.style.visibility = "hidden";
})
rat34.addEventListener('click' , ()=>{
    score++;
    scored.innerText = score;
    tscore.innerText = score;
    rat34.style.visibility = "hidden";
})
rat37.addEventListener('click' , ()=>{
    score++;
    scored.innerText = score;
    tscore.innerText = score;
    rat37.style.visibility = "hidden";
})
rat40.addEventListener('click' , ()=>{
    score++;
    scored.innerText = score;
    tscore.innerText = score;
    rat40.style.visibility = "hidden";
})
rat43.addEventListener('click' , ()=>{
    score++;
    scored.innerText = score;
    tscore.innerText = score;
    rat43.style.visibility = "hidden";
})
rat46.addEventListener('click' , ()=>{
    score++;
    scored.innerText = score;
    tscore.innerText = score;
    rat46.style.visibility = "hidden";
})
rat49.addEventListener('click' , ()=>{
    score++;
    scored.innerText = score;
    tscore.innerText = score;
    rat49.style.visibility = "hidden";
})
rat52.addEventListener('click' , ()=>{
    score++;
    scored.innerText = score;
    tscore.innerText = score;
    rat52.style.visibility = "hidden";
})
rat55.addEventListener('click' , ()=>{
    score++;
    scored.innerText = score;
    tscore.innerText = score;
    rat55.style.visibility = "hidden";
})
rat58.addEventListener('click' , ()=>{
    score++;
    scored.innerText = score;
    tscore.innerText = score;
    rat58.style.visibility = "hidden";
})
// Rats Who cause change on click
rat3.addEventListener('click' , change)
rat6.addEventListener('click' , change)
rat9.addEventListener('click' , change)
rat12.addEventListener('click', change)
rat15.addEventListener('click', change)
rat18.addEventListener('click' , change)
rat21.addEventListener('click' , change)
rat14.addEventListener('click' , change)
rat27.addEventListener('click' , change)
rat30.addEventListener('click' , change)
rat33.addEventListener('click' , change)
rat36.addEventListener('click' , change)
rat39.addEventListener('click' , change)
rat42.addEventListener('click' , change)
rat45.addEventListener('click' , change)
rat48.addEventListener('click' , change)
rat51.addEventListener('click' , change)
rat54.addEventListener('click' , change)
rat57.addEventListener('click' , change)
rat60.addEventListener('click' , change)
// Rats who cause change when mouse enter on them
rat2.addEventListener('mouseenter', change)
rat5.addEventListener('mouseenter', change)
rat8.addEventListener('mouseenter', change)
rat11.addEventListener('mouseenter', change)
rat14.addEventListener('mouseenter', change)
rat17.addEventListener('mouseenter', change)
rat20.addEventListener('mouseenter', change)
rat23.addEventListener('mouseenter', change)
rat26.addEventListener('mouseenter', change)
rat29.addEventListener('mouseenter', change)
rat32.addEventListener('mouseenter', change)
rat35.addEventListener('mouseenter', change)
rat38.addEventListener('mouseenter', change)
rat41.addEventListener('mouseenter', change)
rat44.addEventListener('mouseenter', change)
rat47.addEventListener('mouseenter', change)
rat50.addEventListener('mouseenter', change)
rat53.addEventListener('mouseenter', change)
rat56.addEventListener('mouseenter', change)
rat59.addEventListener('mouseenter', change)