class MythicalCreature {
    constructor(name){
        this.name = name
        this.health = 500
        this.hunger = 400
    }
    drinks(){
        this.health += 10
        return this
    }
    eats(){
        this.health += 10
        this.hunger += 20
        console.log(`${this.name}'s health is ${this.health}`)
        return this
    }
    stats(){
        return console.table({
            name: this.name,
            health: this.health
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
        this.health += 20
        this.hunger -=15
        console.log(`${this.name} is happy`)
        return this
    }
    giveGold() {
        console.log(`An offering of gold has been given, they are ${this.happy}`)
        this.health += 10
    }
}

const draco = new Dragon("draco")
draco.drinks().eats()
draco.stats()


