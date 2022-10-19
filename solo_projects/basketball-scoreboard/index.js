const homePointsDisplay = document.getElementById('home-points-display')
const guestPointsDisplay = document.getElementById('guest-points-display')
const homeCard = document.getElementById('home')
const guestCard = document.getElementById('guest')
const modal = document.getElementById('modal')


let homePoints = 0
let guestPoints = 0

function render() {
    homePointsDisplay.innerText = homePoints
    guestPointsDisplay.innerText = guestPoints
    leadingTeam()
}

function homeAddPoints(e) {
    homePoints += parseInt(e.target.value)  
    render()
}

function guestAddPoints(e) {
    guestPoints += parseInt(e.target.value)  
    render()
}

function resetGame() {
    homeCard.classList.remove('color')
    guestCard.classList.remove('color')
    modal.style.display = 'none'
    homePoints = 0
    guestPoints = 0
    guestPointsDisplay.innerText = guestPoints
    homePointsDisplay.innerText = homePoints
}

function leadingTeam() {
    if (homePoints >= 21 || guestPoints >= 21) {
        let winningTeam
        homePoints >= 21 ? winningTeam = 'Home' : winningTeam = 'Guest'
        
        modal.style.display = "block"
        document.getElementById('winning-msg').innerText = `${winningTeam} team is the winner!`
    }
    
    if (homePoints === guestPoints) {
        homeCard.classList.remove('color')
        guestCard.classList.remove('color')
    } else if (homePoints > guestPoints) {
        guestCard.classList.remove('color')
        homeCard.classList.add('color')
    } else {
        guestCard.classList.add('color')
        homeCard.classList.remove('color')
    } 
}

const buttonsHome = document.getElementsByClassName('btn-home')
const buttonsGuest = document.getElementsByClassName('btn-guest')

Array.from(buttonsHome).forEach(button => button.addEventListener('click', homeAddPoints))
Array.from(buttonsGuest).forEach(button => button.addEventListener('click', guestAddPoints))

document.getElementById('reset-btn').addEventListener('click', resetGame)

render()