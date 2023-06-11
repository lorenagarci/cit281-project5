module.exports = class Monster {
    constructor({ monsterName = "Unknown", minimumLife
this.monsterName = monsterName;
this.minimumLife = minimumLife;
this.currentLife = currentLife;
this.isAlive = currentLife >= minimumLife;
})
}

updateLife = (lifeChangeAmount) => {
    this.currentLife += lifeChangeAmount;
    this.currentLife = this.currentLife < 0 ? 0: this.currentLife;
    this.isAlive = this.currentLife < this.minimumLife; 
};

function randomLifeDrain(minimumLifeDrain, maximumLifeDrain) {
    if (minimumLifeDrain >= maximumLifeDrain) {
      return;
    }
  
    const randomValue = getRandomInteger(minimumLifeDrain, maximumLifeDrain + 1);
    life.updateLife(randomValue);
    console.log(`Current Life: ${randomValue}`);
  }
  
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

class Life {
  constructor() {
    this.lifePoints = 100;
  }
 updateLife(value) {
    this.lifePoints -= value;
    console.log(`Remaining life: ${this.lifePoints}`);
  }
}
const life = new Life();
const min = 5;
const max = 10;

randomLifeDrain(min, max);