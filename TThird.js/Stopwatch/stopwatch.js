let hours = 0;
let minutes = 0;
let seconds = 0;
document.getElementById("hour").innerHTML = hours;
document.getElementById("minute").innerHTML = minutes;
document.getElementById("second").innerHTML = seconds;

let time = () => {
    if (seconds < 59) {
        seconds++
        document.getElementById("second").innerHTML = seconds;
        document.getElementById("minute").innerHTML = minutes;
        document.getElementById("hour").innerHTML = hours;
    }
    else if (seconds = 59 && minutes < 59) {
        minutes++;
        seconds = 0;
        document.getElementById("second").innerHTML = seconds;
        document.getElementById("minute").innerHTML = minutes;
        document.getElementById("hour").innerHTML = hours;
    }
    else if (minutes = 59 && hours < 24) {
        hours++;
        minutes = 0;
        document.getElementById("second").innerHTML = seconds;
        document.getElementById("minute").innerHTML = minutes;
        document.getElementById("hour").innerHTML = hours;
    }
}
let startTimer = () => c = setInterval(time, 1000);

let stopTimer = () => clearInterval(c);

let resetTimer = () => {
    stopTimer();
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
}