const resetButton = document.querySelector ( '#reset-button');

const teamoneShootButton = document.querySelector('#teamone-shoot-button');

const teamTwoShotButton = document.querySelector('#teamtwo-shoot-button');
let shotTwo = document.querySelector('#teamtwo-numshots');
let counterTwo = document.querySelector('#teamtwo-numgoals');
let shotOne = document.querySelector('#teamone-numshots');
let counterOne = document.querySelector('#teamone-numgoals');
let resetCount = document.querySelector('#num-resets');
var denied = new Audio();
denied.src = "https://www.myinstants.com/media/sounds/denied.mp3"
var reset =new Audio();
reset.src = "https://www.myinstants.com/media/sounds/avengers_.mp3"
var cheer = new Audio()
cheer.src = "https://www.myinstants.com/media/sounds/crowd-cheer.mp3"

resetButton.addEventListener ('click', function(){
    console.log ('Score Reset, Play Again!');
shotOne.innerHTML = 0;
counterOne.innerHTML = 0;
shotTwo.innerHTML = 0;
counterTwo.innerHTML = 0;
let newCounterValue = Number (resetCount.innerHTML) + 1
resetCount.innerHTML = newCounterValue
reset.play()
})

     teamoneShootButton.addEventListener ('click', function(){
    console.log ('Team One Shoots')
    let newCounterValue = Number (shotOne.innerHTML) + 1;
    shotOne.innerHTML = newCounterValue;
    denied.play()
    
    
    if (shotOne.innerHTML % 1.5 === 1) {
        let newCounterValue = Number (counterOne.innerHTML) + 1;
        counterOne.innerHTML = newCounterValue;
        cheer.play ()
    
}
})











teamTwoShotButton.addEventListener ('click', function(){
console.log ('Team Two Shoots')
let newCounterValue = Number (shotTwo.innerHTML) + 1;
shotTwo.innerHTML = newCounterValue;
denied.play()
if (shotTwo.innerHTML % 1.5 === 1) {
    let newCounterValue = Number (counterTwo.innerHTML) + 1;
    counterTwo.innerHTML = newCounterValue;
    console.log ('Team Two Scores')
    cheer.play()
}


}






)