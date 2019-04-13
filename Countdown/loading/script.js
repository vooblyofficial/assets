window.onload = function () {
    var paramTime = config.time * 60,
        display = document.querySelector('#percent');
        displaybar = document.querySelector('#progress-fill')

    startTimer(paramTime, display, displaybar);
};


function startTimer(duration, display, displaybar) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
      
        console.log(350 - Math.floor((timer / duration) * 350));

        display.textContent = Math.floor(100 - (timer / duration) * 100) + "%";
        //document.getElementById('div_register').style.width='500px';
        displaybar.style.width = (350 - Math.floor((timer / duration) * 350)) + "px";
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}