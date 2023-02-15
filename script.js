// Main Page
var start = document.getElementById("start");
var option = document.getElementById("options");
var exit = document.getElementById("exit");
start.addEventListener('click', () => {
    window.open("instructions.html", "_parent");
})
option.addEventListener('click', () => {
    window.alert("Options will add in next update :)");
})
exit.addEventListener('click', () => {
    window.close();
})