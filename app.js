class Animal {
    constructor(name){
        this.name = name
        this.healthPoints = 500
        this.hunger = 400
        this.actionPoints = 300
    }
    drinks(){
        this.healthPoints += 10
        return this
    }
    eats(){
        this.healthPoints += 10
        this.hunger += 20
        this.actionPoints += 15
        console.log(`${this.name}'s health is ${this.healthPoints}`)
        return this
    }
    stats(){
        return console.table({
            name: this.name,
            healthPoints: this.healthPoints,
            actionPoints: this.actionPoints,
        })
    }
}

class Dragon extends Animal{
    constructor(name, happy){
        super(name,happy) //super keyword runs the constructor from parent class to set up 
                            //the properties for the new class
        this.happy = happy
    }
    burnVillage() {
        this.healthPoints += 20
        this.hunger -=15
        this.actionPoints -=20
        console.log(`${this.name} is basking in the flames`)
        return this
    }
    giveGold() {
        console.log(`An offering of gold has been given, they are ${this.happy}`)
        this.healthPoints += 10
        this.actionPoints += 5
        return this
    }
}

const draco = new Dragon("draco")
draco.drinks().eats()
draco.stats()

class Manticore extends Animal{
    constructor(name, mood){
        super(name, mood)
        this.mood = mood
    }
stingAttack(){
    this.healthPoints += 20
    this.hunger -= 10
    this.actionPoints -= 15
    console.log(`This ${this.name} is satisfied`)
    return this
}
playYarn(){
    console.log(`${this.name} is playing with a ball of yarn, they are ${this.mood}`)
    this.healthPoints += 10
    this.actionPoints += 5
    return this
}
}
const manny = new Manticore("manny")
manny.drinks().eats().playYarn
manny.stats()

class Centaur extends Animal{
    constructor(name, content){
        super(name, content)
        this.content = content
    }
shootArrow() {
    this.healthPoints += 15
    this.hunger -= 10
    this.actionPoints -= 10
    console.log(`This ${this.name} is out hunting`)
    return this
}
kickHooves() {
    this.healthPoints += 10
    this.actionPoints += 5
    console.log(`${this.name} is ${this.content}`)
}
}
const charlie = new Centaur("charlie")
charlie.drinks().eats().shootArrow()
charlie.stats()

