const currentTime = () => {
    let day = new Date();
    let hours = day.getHours();
    let minutes = day.getMinutes();
    let seconds = day.getSeconds();
    document.getElementById("time").innerHTML =`${hours} : ${minutes} : ${seconds}`
    if (hours < 12) {
        document.getElementById("time12").innerHTML =`${hours} : ${minutes} : ${seconds} AM`
    }
    else if (hours >= 12) {
        hours -= 12;
        document.getElementById("time12").innerHTML =`${hours} : ${minutes} : ${seconds} PM`
    }
};

const currentTime12 = () => {};

const runningTime = () => setInterval(currentTime, 1000);

runningTime();