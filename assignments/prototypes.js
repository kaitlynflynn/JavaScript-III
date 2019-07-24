/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.name = attributes.name;
  this.dimensions = attributes.dimensions;
}

// prototype
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game`;
};

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(attributes) {
  GameObject.call(this, attributes); // implicit
  this.healthPoints = attributes.healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype); // inheritance destroy() from gameObj

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage`;
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(attributes) {
  CharacterStats.call(this, attributes) // implicit
  this.team = attributes.team;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
} 

Humanoid.prototype = Object.create(CharacterStats.prototype) // inheritance
Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}.`
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date Wed July 24 2019
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  

  // Villain
  function Villain(attributes) {
    Humanoid.call(this, attributes) // implicit
  }
  Villain.prototype = Object.create(Humanoid.prototype); // inheritance

  // Hero
  function Hero(attributes) {
    Humanoid.call(this, attributes); // implicit
  }
  Hero.prototype = Object.create(Humanoid.prototype); // inheritance

  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;

  // Hero
  Hero.prototype.removeHealth = function () {
    this.healthPoints -= 5;
    console.log( `${this.healthPoints}`);
  }

  // Villain
  Villain.prototype.removeHealth = function () {
    this.healthPoints -= 5;
    console.log( `${this.healthPoints}`);
  }

  // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
  // Hero
  const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2, 
      width: 4, 
      height: 6,
    },
    healthPoints: 200,
    name: 'Comrade The Great',
    team: 'Kingdom Pug',
    weapons: [
      'fangs',
      'fishy butt',
    ],
    language: 'Puggish',
  });

  // Villain
  const villain = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2, 
      width: 4,
      height: 6,
    },
    healthPoints: 50,
    name: 'The Evil Chairman Meow',
    team: 'The Prowler in the Tower',
    weapons: [
      'claws',
      'dingle berries',
    ],
    language: 'Meowish',
  });

  // Battle!
  Humanoid.prototype.battle = function (opponent) {
    console.log(opponent.healthPoints);
    let opHealth = opponent.healthPoints;
    for (i = 0; i < opHealth; i++) {
      opponent.removeHealth();
    }
    return opponent.healthPoints;
  }

  console.log(hero.battle(villain));
