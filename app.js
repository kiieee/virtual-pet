//Main button functionality

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".button");
    const stats = document.querySelectorAll(".statsdisplay")
    let x = 0; 
    let y = 0;
    let z = 0;
    let n = 0;
    //added variables for each button to see if they are counted
    buttons.forEach(button => {
        button.addEventListener("mouseover", function() {
            button.style.backgroundColor = "yellow"; 
            //mouseover
        });

        button.addEventListener("mouseout", function() {
            button.style.backgroundColor = ""; 
        });

        button.addEventListener("click", function() {
            if (button.textContent === "A") {
                x += 1;
                console.log(`x is now ${x}`);
            }
        });
        button.addEventListener("click", function() {
            if (button.textContent === "B") {
                y += 1;
                console.log(`y is now ${y}`);
            }
        });
        button.addEventListener("click", function() {
            if (button.textContent === "C") {
                z += 1;
                console.log(`z is now ${z}`);
            }
        });
        button.addEventListener("click", function() {
            if (button.textContent === "D") {
                n += 1;
                console.log(`n is now ${n}`);
            //event listeners for clicking
            }
        });
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowLeft") {
            x += 1;
            console.log(`x is now ${x}`);
        }
    });
    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowUp") {
            y += 1;
            console.log(`y is now ${y}`);
        }
    });
    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowRight") {
            z += 1;
            console.log(`z is now ${z}`);
        }
    });
    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowDown") {
            n += 1;
            console.log(`n is now ${n}`);
            //event listeners for keydowns
        }
    });
});


stats.addEventListener("keydown").textContent(`${x}`)
//me trying to make "Here be buttons start dipslaying X value (A button or left button click)"

const button1  = document.getElementsByClassName(`button`)[0]
const button2 = document.getElementsByClassName(`button`)[1]
const button3 = document.getElementsByClassName(`button`)[2]
const button4 = document.getElementsByClassName(`button`)[3]
const button5 = document.getElementsByClassName(`button`)[4]
button1.textContent = `${x}`
button2.textContent = `${y}`
button3.textContent = `${z}`
button4.textContent = `${n}`
button5.textContent = `${x+y+z+n}`

//Me trying to make buttons display click values

