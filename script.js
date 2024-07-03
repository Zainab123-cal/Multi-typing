const typingSpans = document.querySelectorAll('.typing-span');
const texts = ['Hello', 'World!', 'This is a multi-typing effect'];
let currentSpanIndex = 0;
let currentTextIndex = 0;
let currentCharIndex = 0;
let typingInterval;

function startTyping() {
    typingInterval = setInterval(() => {
        const currentSpan = typingSpans[currentSpanIndex];
        const currentText = texts[currentTextIndex];
        const currentChar = currentText[currentCharIndex];

        currentSpan.textContent += currentChar;

        if (currentCharIndex >= currentText.length - 1) {
            currentSpan.classList.add('active');
            currentTextIndex++;
            currentCharIndex = 0;

            if (currentTextIndex >= texts.length) {
                clearInterval(typingInterval);
            }
        } else {
            currentCharIndex++;
        }
    }, 100); // adjust the interval to change the typing speed
}

startTyping();

// Add cursor animation
const cursor = document.createElement('span');
cursor.className = 'cursor';
document.querySelector('.typing-text').appendChild(cursor);