// Instructions Page
var next = document.getElementById("next");
var back = document.getElementById("back");
back.addEventListener('click', () => {
    history.back();
})
next.addEventListener('click', () => {
    window.open("game.html", "_parent")
})