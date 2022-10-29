const adventureTextVar = document.querySelector(".adventureText");
const changeText = (text) => {
    adventureTextVar.innerText = text;
}

function buttonOne() {
    var txt = "You encounter a blood thirsty vampire and die!<br> The End!";
    document.getElementById("button-one").innerHTML = txt;


}

function changeText(text){
    adventureTextVar.innerText = text;
}

function buttonTwo() {
    var txt = "You escaped to live another day...<br> The End?";
    document.getElementById("button-two").innerHTML = txt;
}

button1.addEventListener("click", changeText("Insert text here"));
button2.addEventListener("click", changeText("Change text here"));