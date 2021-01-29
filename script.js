const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();

    console.log(date);
    
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    
    console.log("Hour: " + hour + " Minutes: " + min +" Second: " + sec);
    
    let hourSelector = (hour*360/12)+(min*(360/60)/12);
    let minSelector = (min*360/60)+(sec*(360/60)/60);
    let secSelector = sec*360/60;
    
function runTheClock() {
    
    hourSelector = hourSelector+(3/360);
    minSelector = minSelector+(6/60);
    secSelector = secSelector+6;
    
    HOURHAND.style.transform = "rotate(" + hourSelector + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minSelector + "deg)";
    SECONDHAND.style.transform = "rotate(" + secSelector + "deg)";
}

var interval = setInterval(runTheClock, 1000);
