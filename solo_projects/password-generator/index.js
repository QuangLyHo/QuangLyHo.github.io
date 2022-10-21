const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const button = document.getElementById('btn')
const outputOne = document.getElementById('output-one')
const outputTwo = document.getElementById('output-two')
const increaseBtn = document.getElementById('btn-increase')
const decreaseBtn = document.getElementById('btn-decrease')
const passwordLengthDisplay = document.getElementById('password-length')

let passwordLength = 6
passwordLengthDisplay.innerText = passwordLength

function generatePassword() {
    outputOne.innerText = ''
    outputTwo.innerText = ''
    
    let passwordOne = ''
    let passwordTwo = ''
    
    for (let i = 0; i < passwordLength; i++) {
        passwordOne += characters[Math.floor(Math.random() * 91)]
        passwordTwo += characters[Math.floor(Math.random() * 91)]
    }
    
    outputOne.innerText = passwordOne
    outputTwo.innerText = passwordTwo
}

function increment() {
    if (passwordLength === 14) {
        increaseBtn.disabled = true
    }
    decreaseBtn.disabled = false
    passwordLength++
    passwordLengthDisplay.innerText = passwordLength
}

function decrement() {
    if (passwordLength === 2) {
        decreaseBtn.disabled = true
    }
    increaseBtn.disabled = false
    passwordLength--
    passwordLengthDisplay.innerText = passwordLength
}

function copy(e) {
    let passToCopy = e.target.innerText
    navigator.clipboard.writeText(passToCopy)
}


button.addEventListener('click', generatePassword)
increaseBtn.addEventListener('click', increment)
decreaseBtn.addEventListener('click', decrement)

const outputArr = document.getElementsByClassName('output')

Array.from(outputArr).forEach(output => output.addEventListener('click', copy))