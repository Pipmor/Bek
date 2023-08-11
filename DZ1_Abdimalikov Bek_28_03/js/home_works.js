document.addEventListener('DOMContentLoaded', function() {
    const gmailInput = document.getElementById('gmail_input');
    const gmailButton = document.getElementById('gmail_button');
    const gmailResult = document.getElementById('gmail_result');

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    gmailButton.addEventListener('click', function() {
        const email = gmailInput.value.trim().toLowerCase();
        if (gmailRegex.test(email)) {
            gmailResult.textContent = 'This is a valid Gmail address.';
        } else {
            gmailResult.textContent = 'This is not a valid Gmail address.';
        }
    });

    let position = 0;function moveBox() {
        let box = document.querySelector('.box');
        box.style.left = ${position}px;
        position++;
        if (position < 451) {
            requestAnimationFrame(moveBox);    }
    }moveBox()

});

