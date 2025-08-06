var time;
var clears;

function Timer() {
    time = time - 1;
    console.log(time)
    document.getElementsByClassName('minutes')[0].innerHTML = parseInt(time / 60);
    document.getElementsByClassName('seconds')[0].innerHTML = (time % 60);
}



function start() {
    time = 600;
    clears = setInterval(Timer, 1000)
}

function stop() {
    clearInterval(clears);
    document.getElementsByClassName('minutes')[0].innerHTML = 0;
    document.getElementsByClassName('seconds')[0].innerHTML = 0;
}
