
function getDiceRoll(diceCount) {
    return new Array(diceCount).fill(0).map(() => {
        return Math.floor(Math.random() * 6) + 1
    })
}

function getDicePlaceHolderHtml(diceCount) {
    return new Array(diceCount).fill(0).map(() => 
        `<div class="dice-placeholder"> </div>`).join('')
}

const  getPercentage = (remainingHealth, maximumHealth) => {
    return (100 * remainingHealth) / maximumHealth
}

export { getDiceRoll, getDicePlaceHolderHtml, getPercentage }
