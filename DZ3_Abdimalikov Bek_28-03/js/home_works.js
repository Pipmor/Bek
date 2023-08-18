document.addEventListener('DOMContentLoaded', function() {
    const gmailInput = document.getElementById('gmail_input');
    const gmailButton = document.getElementById('gmail_button');
    const gmailResult = document.getElementById('gmail_result');

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    gmailButton.addEventListener('click', function () {
        const email = gmailInput.value.trim().toLowerCase();
        if (gmailRegex.test(email)) {
            gmailResult.textContent = 'This is a valid Gmail address.';
        } else {
            gmailResult.textContent = 'This is not a valid Gmail address.';
        }
    });

    const box = document.querySelector('.child_block');

    let positionX = 0;
    let positionY = 0;

    const move = () => {
        if (positionX < 448 && positionY === 0) {
            positionX++;
            box.style.left = `${positionX}px`;
            setTimeout(move, 1);
        } else if (positionX >= 448 && positionY < 448) {
            positionY++;
            box.style.top = `${positionY}px`;
            setTimeout(move, 1);
        } else if (positionX > 0 && positionY === 448) {
            positionX--;
            box.style.left = `${positionX}px`;
            setTimeout(move, 1);
        } else if (positionX === 0 && positionY > 0) {
            positionY--;
            box.style.top = `${positionY}px`;
            setTimeout(move, 1);
        }
    }
    move();
})

let timerInterval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isRunning = false;

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('ml-seconds');

function updateTimerDisplay() {
    minutesDisplay.textContent = minutes.toString().padStart(2, '0');
    secondsDisplay.textContent = seconds.toString().padStart(2, '0');
    millisecondsDisplay.textContent = milliseconds.toString().padStart(2, '0');
}

function startTimer() {
    if (!isRunning) {
        timerInterval = setInterval(function () {
            milliseconds++;
            if (milliseconds === 100) {
                seconds++;
                milliseconds = 0;
            }
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }
            updateTimerDisplay();
        }, 10);
        isRunning = true;
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateTimerDisplay();
    isRunning = false;
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

updateTimerDisplay();

