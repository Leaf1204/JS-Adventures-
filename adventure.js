


class Hero {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.weapons = {sprinkleSpray: 5, sugarShock: 10}
        this.catchPhrase = ['i\'m fresher than day old pizza', 
        'you can\'t count my calories']
    }
    talkSass(){
        let x = Math.floor(Math.random() * 2);
        console.log(this.catchPhrase[x])
    }
    announceHealth(){
        console.log(this.health);
    }
    fight(opponent){
        console.log('i\'m ready to rumble')
        console.log(this.weapons.sprinkleSpray)
        opponent.health -= this.weapons.sprinkleSpray
        console.log(`${opponent.name} got hit by sprinkleSpray! His health is now at ${opponent.health}! `)
    }
}
//Now, using this Hero class, create an instance of our hero Dougie the donut.
class Enemy {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.weapons = {pepperoniStars: 5, cheeseGrease: 10 }
        this.catchPhrase = ['i\'m youtube famous',
        'i\'m more dangerous than an uncovered sewer']
    }
    talkSmack(){
        let x = Math.floor(Math.random() * 2);
        console.log(this.catchPhrase[x])
    }
    announceHealth(){
        console.log(this.health);
    }
    fight(opponent){
        console.log("i\'m gonna flatten you like a slice of pepperoni!")
        console.log(this.weapons.pepperoniStars)
        opponent.health -= this.weapons.pepperoniStars
        console.log(`${opponent.name} got hit by pepperoniStars! His health is now at ${opponent.health}! `)
    }
}

const dougie = new Hero("Dougie the donut")
const pizzaRat = new Enemy("Pizza Rat")

// Walking Down the Street
// Now, let's write their story! Dougie is walking down Flat Iron -- but oh no! He runs into Pizza rat!

dougie.talkSass()
pizzaRat.talkSmack()
dougie.announceHealth()
pizzaRat.announceHealth()


pizzaRat.fight(dougie);
dougie.fight(pizzaRat);
dougie.announceHealth()
pizzaRat.announceHealth()

// Have Pizza Rat fight Dougie
// Have Dougie fight Pizza Rat
// Have Pizza Rat and Dougie both announceHealth to make sure their health has decreased!