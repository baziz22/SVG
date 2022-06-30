let range = document.querySelector('#range');
let number = document.querySelector("#num");
let arc = document.querySelector("#arc");
let arcLength = document.querySelector("#arc-length");
let percentage = document.querySelector("#percentage");
i = 0;

range.oninput = function () {
    number.value = Math.floor((+this.value * 100) / 126);
    arc.style.strokeDashoffset = this.value;
    percentage.innerHTML = Math.floor((+this.value * 100) / 126) + "%";
    arc.style.fillOpacity = this.value / 126;
    i = Math.floor((+this.value * 100) / 126);
    
    if (i > 50) {
        percentage.style.fill = "white"
    } else {
        percentage.style.fill = "black"
    }
}