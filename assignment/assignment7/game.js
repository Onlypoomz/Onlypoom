window.onload = pageLoad;

function pageLoad() {
    var startbutton = document.getElementById("start")
    startbutton.onclick = startGame
}

function startGame() {
    alert("Ready");
    addBox();
    timeStart();
}

function timeStart() {
    var TIMER_TICK = 1000;
    var timer = null;
    var min = 0.5;
    var second = min * 60;
    var x = document.getElementById('clock');
    timer = setInterval(timeCount, TIMER_TICK);

    function timeCount() {
        var allbox = document.querySelectorAll("#game-layer div");
        second--
        x.innerHTML = second
        if (second == 0) {
            alert("You lose")
            clearInterval(timer)
            clearScreen()
            timer = null;
        }
        if (allbox.length == 0) {
            alert("You are winner!!")
            clearInterval(timer)
            timer = null;
        }

    }
}

function addBox() {
    var numbox = document.getElementById("numbox").value;
    var gameLayer = document.getElementById("game-layer");
    var colorDrop = document.getElementById("color").value;

    for (var i = 0; i < numbox; i++) {
        var tempbox = document.createElement("div");
        tempbox.className = "square";
        tempbox.id = "box" + i;
        tempbox.style.backgroundColor = colorDrop
        tempbox.style.left = Math.random() * (500 - 25) + "px";
        tempbox.style.top = Math.random() * (500 - 25) + "px";

        gameLayer.appendChild(tempbox)
        bindBox(tempbox);
    }
}

var removeBox

function bindBox(box) {
    removeBox = document.getElementById("game-layer");
    box.onclick = function() {
        removeBox.removeChild(box)
    }
}

function clearScreen() {
    var allbox = document.querySelectorAll("#game-layer div");

    for (var i = 0; i < allbox.length; i++) {
        removeBox.removeChild(allbox[i])
    }
}