const hoursElement = document.getElementById('hour');
const minsElement = document.getElementById('minutes');
const secsElement = document.getElementById('seconds');


updateClock();
setInterval(updateClock, 1000);

function updateClock() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    hoursElement.textContent = hours;
    minsElement.textContent = minutes;
    secsElement.textContent = seconds;

}
