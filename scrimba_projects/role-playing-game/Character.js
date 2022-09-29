import { getDicePlaceHolderHtml, getDiceRoll, getPercentage } from "./util.js"

function Character(data) {
    Object.assign(this, data)
    
    this.maxHealth = this.health

    this.diceArray = getDicePlaceHolderHtml(this.diceCount)

    this.getDiceHtml = function(diceCount) {
        this.currentDiceScore = getDiceRoll(this.diceCount)
        this.diceArray = this.currentDiceScore.map((num) => 
            `<div class="dice">${num}</div>`).join('')
    }

    this.takeDamage = function(attackScoreArray) {
        let totalAttackScore = attackScoreArray.reduce((a, b) => {
            return a + b
        })

        this.health -= totalAttackScore

        if (this.health <= 0) {
            this.dead = true
            this.health = 0
        }
    }

    this.getHealthHtml = function() {
        const percent = getPercentage(this.health, this.maxHealth)
        return `
            <div class="health-bar-outer">
                <div class="health-bar-inner ${percent < 26 ? "danger" : ""}" 
                        style="width:${percent}%;">
                </div>
            </div>
        `
    }

    this.reset = function() {
        this.health = this.maxHealth
        this.currentDiceScore = []
        this.dead = false
        this.diceArray = getDicePlaceHolderHtml(this.diceCount)
    }

    this.getCharHtml = function() {
        const { name, health, diceCount, diceArray } = this
        const healthBar = this.getHealthHtml()
        
        return `
                
                <div class="character-card">
                    <h2>${name}</h2>

                    <div class="health">
                        health: <b> ${health} </b>
                    </div>
                    ${healthBar}

                    <div class="dice-container">
                        ${diceArray}
                    </div>
                </div>
            `
    }
}

export default Character