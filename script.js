const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let hourSelector = 20;
let minSelector = 134;
let secSelector = 43;

HOURHAND.style.transform = "rotate(" + hourSelector + "deg)";
MINUTEHAND.style.transform = "rotate(" + minSelector + "deg)";
SECONDHAND.style.transform = "rotate(" + secSelector + "deg)";