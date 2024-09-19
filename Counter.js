let food = 100; 
let timer = 25; 
const timerDisplay = document.getElementById('timer-display');
const foodDisplay = document.getElementById('food-count');

function updateTimer() {
    timer--;
    timerDisplay.textContent = timer;

    if (timer === 0) {
        food -= 1; // this allows you to change the food when needed
        if (food < 0) {
            food = 0; 
        }
        timer = 25; // this is the timer change as needed
        foodDisplay.textContent = food;
    }
}


setInterval(updateTimer, 1000);