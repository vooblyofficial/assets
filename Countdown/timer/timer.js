window.onload = function () {
    var paramTime = config.time * 60,
        display = document.querySelector('#time');
        display.style.color = config.color;

    startTimer(paramTime, display);
};


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
      
        if (--timer < 0) {
            display.textContent = "Soon!";
            display.style.fontSize = "150px";
        }
    }, 1000);
}
