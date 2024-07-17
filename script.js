// Declare random number variable
const guess = Math.trunc(Math.random() * 100) + 1;

// Declare random number function
const guessNumber = () => {
    return Math.trunc(Math.random() * 100) + 1;
};
// =================== Start ===================
document.querySelector('.start').addEventListener('click', function () {
    document.querySelector('.guess').textContent = guessNumber();
    document.querySelector('h1').style.marginBottom = '3rem';
    document.querySelector('img').style.filter = 'none';
    displayMessage('Is this your number?');
});

// =================== Incorrect ===================

// Array with incorrect message options
const incorrectOptions = [
    "Repeat the number in your head.",
    "Hmm, let me try again.",
    "Are you cheating?",
    "Don't change it!",
    "Just one more try"
];

// Declare array number
let arrayNum = 0;

// Declare display message function
const displayMessage = (message) => {
    document.querySelector('.message').textContent= message;
};



document.querySelector('.incorrect').addEventListener('click', function () {
    document.querySelector('.guess').textContent = guessNumber();
    if (arrayNum === 4) {
        arrayNum = 0;
    } else {
        arrayNum++;
    }
    document.querySelector('h1').style.marginBottom = '3rem';
    document.querySelector('img').style.filter = 'invert(15%) sepia(92%) saturate(7105%) hue-rotate(358deg) brightness(94%) contrast(116%)';
    displayMessage(incorrectOptions[arrayNum]);
});


// =================== Correct ===================
document.querySelector('.correct').addEventListener('click', function () {
    displayMessage("I told you I can read your mind!");
    document.querySelector('.start').textContent = 'Again';
    document.querySelector('h1').style.marginBottom = '3rem';
    document.querySelector('img').style.filter = 'invert(29%) sepia(98%) saturate(795%) hue-rotate(83deg) brightness(80%) contrast(100%)';
});


