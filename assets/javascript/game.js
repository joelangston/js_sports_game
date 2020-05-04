const resetButton = document.querySelector ( '#reset-button');

const teamoneShootButton = document.querySelector('#teamone-shoot-button');

const teamTwoShotButton = document.querySelector('#teamtwo-shoot-button');
let shotTwo = document.querySelector('#teamtwo-numshots');
let counterTwo = document.querySelector('#teamtwo-numgoals');
let shotOne = document.querySelector('#teamone-numshots');
let counterOne = document.querySelector('#teamone-numgoals');
let resetCount = document.querySelector('#num-resets');
var reset =new Audio();
reset.src = "https://www.myinstants.com/media/sounds/avengers_.mp3"
var cheer = new Audio()
cheer.src = "https://www.myinstants.com/media/sounds/crowd-cheer.mp3"
let playerOneShotCount = 0
let playerOneGoalCount = 0
let playerTwoShotCount = 0
let playerTwoGoalCount = 0
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
     playerOneShotCount += 1
     playerOneGoalCount += Math.floor(Math.random() + 0.5)
     shotOne.innerHTML = playerOneShotCount
     counterOne.innerHTML = playerOneGoalCount

     if (playerOneGoalCount === 10){
         alert('Team One Wins!!!!!!')
         cheer.play()
     }
     
        
    
    
 })
teamTwoShotButton.addEventListener ('click', function(){
console.log ('Team Two Shoots')
playerTwoShotCount += 1
playerTwoGoalCount += Math.floor(Math.random() + 0.5)
shotTwo.innerHTML = playerTwoShotCount
counterTwo.innerHTML = playerTwoGoalCount 
if (playerTwoGoalCount === 10){
    alert('Team Two Wins!!!!') 
    cheer.play()
}
 
 



})