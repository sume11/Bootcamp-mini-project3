const heading = document.getElementById("toggle-text");
const button = document.getElementById("toggle-btn");
let isOn = false;
button.addEventListener("click", function() {
    if(isOn) {
        heading.textContent = "OFF";  
        isOn = false;                  
    } else {
        heading.textContent = "ON";  
        isOn = true;                 
    }
});
