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

    giveGold() {
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
    }
    
}

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
}

