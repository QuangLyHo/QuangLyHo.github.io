const button = document.getElementById('convert-btn')
const lengthDisplay = document.getElementById('length-display')
const volumeDisplay = document.getElementById('volume-display')
const massDisplay = document.getElementById('mass-display')
const input = document.getElementById('input-value')


function convert() {
    let value = input.value
    
    lengthDisplay.innerText = `
        ${value} meters = ${(value * 3.281).toFixed(3)} feet | ${value} feet = ${(value / 3.281).toFixed(3)} meters
    `
    
    volumeDisplay.innerText = `
        ${value} liters = ${(value * 0.264).toFixed(3)} gallons | ${value} gallons = ${(value / 0.264).toFixed(3)} liters
    `
    
    massDisplay.innerText = `
        ${value} kilos = ${(value * 2.204).toFixed(3)} pounds | ${value} pounds = ${(value / 2.204).toFixed(3)} kilos
    `
}

button.addEventListener('click', convert)