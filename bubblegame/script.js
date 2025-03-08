let bubbles = "";
let hit = 0;
let iscore = 0;
let time = 60;
let intervalID;

function question() {
    let fs = parseFloat((Math.random() * 50).toFixed(2));
    let ss = parseFloat((Math.random() * 50).toFixed(2));

    document.getElementById("first").textContent = fs;    
    document.getElementById("second").textContent = ss;    
    document.getElementById("equal").textContent = (fs * ss).toFixed(2);  
}

document.getElementById("sbtn").addEventListener("click", () => {
    let eq = document.getElementById("equal").textContent;
    let eq2 = document.getElementById("equal2").value;

    if (parseFloat(eq) === parseFloat(eq2)) {
        iscore += 80;    
        document.getElementById("Score").textContent = iscore;     
    } else{
        iscore -= 10;    
        document.getElementById("Score").textContent = iscore;
        question()
    }
});

document.getElementById("Reset").addEventListener("click", () => {
    iscore = 0;
    time = 60;
    document.getElementById("Score").textContent = iscore;
    document.getElementById("timer").textContent = time;
    clearInterval(intervalID); 
    runtime();
    bubblecount(); 
});

function bubblecount() {    
    bubbles = "";
    for (let i = 0; i < 100; i++) {
        let cal = Math.floor(Math.random() * 10);
        bubbles += `<div class="bubble">${cal}</div>`;
    }    
    document.querySelector("#game-content").innerHTML = bubbles;
}

function runhit() {
    hit = Math.floor(Math.random() * 10);
    document.getElementById("hit").textContent = hit;
}

function runtime() {
    clearInterval(intervalID); 
    intervalID = setInterval(() => {
        if (time > 0) {
            time--;
            document.getElementById("timer").textContent = time;
        } else {
            clearInterval(intervalID);
            document.querySelector(".gameOver").innerHTML = `<div class="over">GAME OVER</div>`;        
        }
    }, 1000);
}

function incresescore() {
    iscore += 10;    
    document.getElementById("Score").textContent = iscore;
}

function decresscore() {
    iscore -= 10;    
    document.getElementById("Score").textContent = iscore;
}

document.querySelector("#game-content").addEventListener("click", (event) => {
    let clickbubble = Number(event.target.textContent);
    if (clickbubble === hit) {
        bubblecount();
        incresescore();
        runhit();
    } else {
        bubblecount();
        decresscore();
        runhit();
    }
});

question();
bubblecount();
runhit();
runtime();
