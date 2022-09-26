import Character from "./Character.js"
import charData from "./data.js"

const attackBtn = document.getElementById('attack-btn')
const heroDiv =  document.getElementById('hero')
const monsterDiv = document.getElementById('monster')

let isWaiting = false
let monsterArr = ['skeleton', 'gundyr', 'slaveknightgael']

let monsterImgArr = ['./images/skelly.webp', './images/hero.webp', './images/slaveknightgael.png']
let monsterImg = 0

function getNextImg() {
    return monsterImg++
}

function getMonster() {
    let nextMonster = charData[monsterArr.shift()]
    return nextMonster ? new Character(nextMonster) : {}
}

function attack() {
    if (!isWaiting) {
        wizard.getDiceHtml()
        monster.getDiceHtml()

        wizard.takeDamage(monster.currentDiceScore)
        monster.takeDamage(wizard.currentDiceScore)
        
        if (wizard.dead) {
            endGame()
        }
        else if (monster.dead) {
            isWaiting = true
            if (monsterArr.length > 0) {
                setTimeout(() => {
                    monster = getMonster()
                    getNextImg()
                    isWaiting = false

                    render()
                }, 1000);

            }
            else endGame()
        }
        render()
    }
}

function endGame() {
    
    isWaiting = true
    const endMessage = wizard.dead && monster.dead ? 
        'NO VICTORS - All creatures have died' : 
        monster.dead ? 'You are Victorious, Rest now Ashen One' : 'YOU DIED'

    document.querySelector('h3').innerHTML = endMessage

    setTimeout(() => {
        document.querySelector('main').classList.add('hide')
        document.querySelector('section').classList.add('hide') 
        document.querySelector('.end-game').classList.remove('hide')
    }, 1500);
}


function reset() {

    isWaiting = false
    document.querySelector('main').classList.remove('hide')
    document.querySelector('section').classList.remove('hide') 
    document.querySelector('.end-game').classList.add('hide')

    monsterArr = ["skeleton", "gundyr", "slaveknightgael"]
    monsterImg = 0
    monsterImgArr = ['./images/skelly.webp', './images/hero.webp', './images/slaveknightgael.png']
    wizard.reset()
    monster = getMonster()
    attackBtn.addEventListener('click', attack)
    render()
}


function render() {
    heroDiv.innerHTML = wizard.getCharHtml()
    heroDiv.style.backgroundImage = "url(/images/DSHero.png)"
    monsterDiv.innerHTML = monster.getCharHtml()
    monsterDiv.style.backgroundImage = `url(${monsterImgArr[monsterImg]})`
}


const wizard = new Character(charData.hero)
let monster = getMonster()

attackBtn.addEventListener('click', attack)
document.querySelector('.end-btn').addEventListener('click', reset)

render()