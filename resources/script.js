const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const landPage = document.querySelector('.landPage');

function showTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    const amPm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    time.innerHTML = `${hours}<span>:</span>${addZero(minutes)}<span>:</span>${addZero(seconds)} ${amPm}`;

    setTimeout(showTime, 1000);
}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setBgd() {
    let today = new Date();
    let hour = today.getHours();

    if (hour > 7 && hour <= 12) {
        landPage.style.backgroundColor = 'lightblue';
        greeting.textContent = "Good Morning!";
        document.getElementById('set-stars-1').hidden = true;
        document.querySelector('.moon').hidden = true;
        document.querySelector('.cloud4').hidden = true;
        document.querySelector('.cloud5').hidden = true;
        document.querySelector('.cloud6').hidden = true;
    } else if (hour > 12 && hour < 18) {
        landPage.style.backgroundImage = 'linear-gradient(red, yellow)';
        greeting.textContent = "Good Afternoon!";
        document.getElementById('set-stars-1').hidden = true;
        document.querySelector('.moon').hidden = true;
        document.querySelector('.cloud4').hidden = true;
        document.querySelector('.cloud5').hidden = true;
        document.querySelector('.cloud6').hidden = true;
    } else {
        landPage.style.backgroundColor = 'rgb(42,42,53)';
        landPage.style.color = 'white';
        greeting.textContent = "Good Evening!";
        document.getElementById('sunLight').hidden = true;
        document.getElementById('sun').hidden = true;
        document.querySelector('.cloud').hidden = true;
        document.querySelector('.cloud2').hidden = true;
        document.querySelector('.cloud3').hidden = true;
    }
}

showTime();
setBgd();

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}
  
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = Math.abs(targetGuess - humanGuess);
    const computerDifference = Math.abs(targetGuess - computerGuess);
    return humanDifference <= computerDifference;
}
  
const updateScore = winner => {
    if (winner === 'human') {
      humanScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }
}
  
const advanceRound = () => currentRoundNumber++;