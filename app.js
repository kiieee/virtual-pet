//Main button functionality

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".button");

    //const stats = document.querySelectorAll(".statsdisplay")

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
                document.getElementById("statsdisplay").innerText =`${x.toString()} .. ${y.toString()} .. ${z.toString()} .. ${n.toString()}` ;

            }
        });
        button.addEventListener("click", function() {
            if (button.textContent === "B") {
                y += 1;
                console.log(`y is now ${y}`);
                document.getElementById("statsdisplay").innerText =`${x.toString()} .. ${y.toString()} .. ${z.toString()} .. ${n.toString()}` ;
            }
        });
        button.addEventListener("click", function() {
            if (button.textContent === "C") {
                z += 1;
                console.log(`z is now ${z}`);
                document.getElementById("statsdisplay").innerText =`${x.toString()} .. ${y.toString()} .. ${z.toString()} .. ${n.toString()}` ;
            }
        });
        button.addEventListener("click", function() {
            if (button.textContent === "D") {
                n += 1;
                console.log(`n is now ${n}`);
                document.getElementById("statsdisplay").innerText =`${x.toString()} .. ${y.toString()} .. ${z.toString()} .. ${n.toString()}` ;

            //event listeners for clicking

            }
        });
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowLeft") {
            x += 1;
            console.log(`x is now ${x}`);
            document.getElementById("statsdisplay").innerText =`${x.toString()} .. ${y.toString()} .. ${z.toString()} .. ${n.toString()}` ;
        }
    });
    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowUp") {
            y += 1;
            console.log(`y is now ${y}`);
            document.getElementById("statsdisplay").innerText =`${x.toString()} .. ${y.toString()} .. ${z.toString()} .. ${n.toString()}` ;
        }
    });
    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowRight") {
            z += 1;
            console.log(`z is now ${z}`);
            document.getElementById("statsdisplay").innerText =`${x.toString()} .. ${y.toString()} .. ${z.toString()} .. ${n.toString()}` ;
        }
    });
    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowDown") {
            n += 1;
            console.log(`n is now ${n}`);
            document.getElementById("statsdisplay").innerText =`${x.toString()} .. ${y.toString()} .. ${z.toString()} .. ${n.toString()}` ;

            //event listeners for keydowns

        }
    });
    document.addEventListener("keydown", function(event) {

        if (event.key === "a") {
            console.log(`Open StartScreen`);
            document.getElementById("startscreen").style.maxHeight = `1000px`;
            document.getElementById("gamescreen").style.maxHeight = `0px`;
            document.getElementById("endscreen").style.maxHeight = `0px`;
        }});
    document.addEventListener("keydown", function(event) {
        if (event.key === "b") {
            console.log(`Open GameScreen`);
            document.getElementById("gamescreen").style.maxHeight = `1000px`;
            document.getElementById("startscreen").style.maxHeight = `0px`;
            document.getElementById("endscreen").style.maxHeight = `0px`;

        }});
    document.addEventListener("keydown", function(event) {
        if (event.key === "c") {
            console.log(`Open End Screen`);
            document.getElementById("endscreen").style.maxHeight = `1000px`;
            document.getElementById("startscreen").style.maxHeight = `0px`;
            document.getElementById("gamescreen").style.maxHeight = `0px`;

            //event listeners for screen cycling 

        }});
});



