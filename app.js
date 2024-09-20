let pet 

//Main button functionality
//Animal class 4 variables HPoints, Hunger, APoints, Thirst.
//5th variable in subclass differs for each creature.
//All values set to 200 

class Animal {
    constructor(name){
        this.name = name
        this.healthPoints = 200
        this.hunger = 200
        this.actionPoints = 200
        this.thirsty = 200
    }
    drink() {
        this.healthPoints = (this.health + 15 >= 200) ? 200 : this.health + 15;
        this.thirsty = (this.thirsty + 15 >= 200) ? 200 : this.thirsty + 15;
        return this
    }
    eats(){
        this.healthPoints = (this.health + 25 >= 200) ? 200 : this.health + 25;
        this.thirsty -= 5;
        this.hunger = (this.hunger + 20 >= 200) ? 200 : this.hunger + 20;
    }
}

class Dragon extends Animal{
    constructor(name){
        super(name); 
        this.happinessPoints = 200;
    }
    burnVillage() {
        this.actionPoints -=20
        this.happinessPoints = (this.happinessPoints + 25 >= 200) ? 200 : this.happinessPoints + 25;
        this.hunger = (this.hunger + 10 >= 200) ? 200 : this.hunger + 10;

    giveGold(); {
        this.actionPoints = (this.actionPoints + 25 >= 200) ? 200 : this.actionPoints +35;
        this.healthPoints = (this.healthPoints + 25 >= 200) ? 200 : this.healthPoints + 5;
    }

    action(activity); {
        switch(activity) {
            case 'Drink':
                this.drink();
                console.log("Refreshing!")
                break;
            case 'Eat':
                this.eats();
                console.log("Yummy!")
                break;
            case 'Burn Village':
                this.burnVillage();
                break;
            case 'Give Gold':
                this.giveGold();
                break;
            default:
                break;
        }
    }

    isAlive(); {
        if (this.healthPoints <= 0) {
            msg.textContent = `${this.name} was too unhealthy, and has died.`;
        }

        if (this.hunger <= 0) {
            msg.textContent = `${this.name} didnt burn enough villages for food and has starved `;
        }
    
        if (this.thirsty <= 0) {
            msg.textContent = `${this.name} died from the lack of water`;
        }
    
        if (this.happinessPoints <= 0) {
            msg.textContent = `${this.name} died of misery`;
        }

        if (this.actionPoints <= 0) {
            msg.textContent = `${this.name} became lazy and died`;
        }
    }
    
}}

class Manticore extends Animal{
    constructor(name){
        super(name);
        this.savageryPoints = 200;
    }
stingAttack(){
    this.actionPoints -=20
    this.savageryPoints = (this.savageryPoints + 25 >= 200) ? 200 : this.savageryPoints + 25;
    this.hunger = (this.hunger + 10 >= 200) ? 200 : this.hunger + 10;
}
playYarn(){
    this.actionPoints = (this.actionPoints + 25 >= 200) ? 200 : this.actionPoints +35;
    this.healthPoints = (this.healthPoints + 25 >= 200) ? 200 : this.healthPoints + 5;
}

action(activity) {
    switch(activity) {
        case 'Drink':
            this.drink();
            break;
        case 'Eat':
            this.eats();
            break;
        case 'Sting Attack':
            this.stingAttack();
            break;
        case 'Play with Yarn':
            this.playYarn();
            break;
        default:
            break;
    }
}

isAlive() {
    if (this.healthPoints <= 0) {
        msg.textContent = `${this.name} was too unhealthy, and has died.`;
    }

    if (this.hunger <= 0) {
        msg.textContent = `${this.name} didnt trap enough humans for food and has starved `;
    }

    if (this.thirsty <= 0) {
        msg.textContent = `${this.name} died from the lack of blood`;
    }

    if (this.savageryPoints <= 0) {
        msg.textContent = `${this.name} died of misery`;
    }

    if (this.actionPoints <= 0) {
        msg.textContent = `${this.name} became lazy and died`;
    }
}
}

class Centaur extends Animal{
    constructor(name){
        super(name)
        this.moodPoints = 200;
    }
shootArrow() {
    this.actionPoints -=20
    this.moodPoints = (this.moodPoints + 25 >= 200) ? 200 : this.moodPoints + 25;
    this.hunger = (this.hunger + 10 >= 200) ? 200 : this.hunger + 10;
}
kickHooves() {
    this.actionPoints = (this.actionPoints + 25 >= 200) ? 200 : this.actionPoints +35;
    this.healthPoints = (this.healthPoints + 25 >= 200) ? 200 : this.healthPoints + 5;
}
action(activity) {
    switch(activity) {
        case 'Drink':
            this.drink();
            break;
        case 'Eat':
            this.eats();
            break;
        case 'Shoot Arrow':
            this.shootArrow();
            break;
        case 'Kick Hooves':
            this.kickHooves();
            break;
        default:
            break;
    }
}

isAlive() {
    if (this.healthPoints <= 0) {
        msg.textContent = `${this.name} was too unhealthy, and has died.`;
    }

    if (this.hunger <= 0) {
        msg.textContent = `${this.name} didnt burn enough villages for food and has starved `;
    }

    if (this.thirsty <= 0) {
        msg.textContent = `${this.name} died from the lack of water`;
    }

    if (this.happinessPoints <= 0) {
        msg.textContent = `${this.name} died of misery`;
    }

    if (this.actionPoints <= 0) {
        msg.textContent = `${this.name} became lazy and died`;
    }
}}


document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".button");

    //const stats = document.querySelectorAll(".statsdisplay")

    let x = 0; 
    let y = 0;
    let z = 0;
    let n = 0;

    //added variables for each button to see if they are counted

    const startbutton = document.getElementById("startbutt")

//startbutton actions

    startbutton.addEventListener("click", function() {
        pet = new Animal("Billy")
        let animalname = document.getElementById("name").value 
        let animalclass = document.getElementById("animal").value
        console.log(`${animalname} ${animalclass}`)
        console.log(`Open GameScreen`);
        document.getElementById("gamescreen").style.maxHeight = `1000px`;
        document.getElementById("startscreen").style.maxHeight = `0px`;
        document.getElementById("endscreen").style.maxHeight = `0px`;
    });

    const resetbutton = document.getElementById("restart")


//resetubtton actions



    resetbutton.addEventListener("click", function() {
        console.log("game reset");
        document.getElementById("gamescreen").style.maxHeight = `0px`;
        document.getElementById("startscreen").style.maxHeight = `1000px`;
        document.getElementById("endscreen").style.maxHeight = `0px`;
        document.getElementById('animals').reset();
        document.getElementById('name').reset();
        animalname = null;
        animalclass = null;

    });

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
                pet.eats();

            }
        });
        button.addEventListener("click", function() {
            if (button.textContent === "B") {
                y += 1;
                console.log(`y is now ${y}`);
                document.getElementById("statsdisplay").innerText =`${x.toString()} .. ${y.toString()} .. ${z.toString()} .. ${n.toString()}` ;
                pet.drink();
                console.log(`${this.thirsty}`)
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


let food = 100; 
let timer = 1; 
const timerDisplay = document.getElementById('timer-display');
const foodDisplay = document.getElementById('food-count');
const foodbar = document.getElementById(`foodbar`)

function updateTimer() {
    timer--;
    timerDisplay.textContent = timer;

    if (timer === 0) {
        food -= 3; // this allows you to change the food when needed
        if (food < 0) {
            food = 0; 
        }
        timer = 5; // this is the timer change as needed
        foodDisplay.textContent = food;
        // howlong = food;
        // foodbar.style.width = howlong
        // tried to make healthbar scale with time
    }
}


setInterval(updateTimer, 1000);