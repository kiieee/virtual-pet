document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".button");
    let x = 0; 
    buttons.forEach(button => {
        button.addEventListener("mouseover", function() {
            button.style.backgroundColor = "yellow"; 
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
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowLeft") {
            x += 1;
            console.log(`x is now ${x}`);
        }
    });
});