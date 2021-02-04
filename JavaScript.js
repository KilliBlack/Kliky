
var button = document.getElementsByClassName('btn')

button[0].addEventListener('click',clickMe)

function clickMe() {

    const myList = document.getElementById('list')

    var newNumber = document.createElement('li')
    var randomizer = Math.ceil(Math.random()*20)
    newNumber.textContent = randomizer
    console.log(newNumber)
 }