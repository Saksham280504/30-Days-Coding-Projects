const typingText = document.querySelector('.typing-text p');
const input = document.querySelector('.wrapper .input-field');
const time = document.querySelector('.time span b');
const mistakes = document.querySelector('.mistake span');
const wpm = document.querySelector('.wpm span');
const cpm = document.querySelector('.cpm span');
const btn = document.querySelector('button');

// set value
let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistake = 0;
let isTyping = false;

function loadParagraph() {
    const paragraph = ["Avoid daydreaming about the years to come.", "You are the most important person in your life.", "Always be true to who you are, and ignore what other people have to say about you.", "Always remember to smile everyday.", "Only demonstrate your strength when its really required.", "Make your dreams into aims, that's how you win in life."];

    const randomIndex = Math.floor(Math.random()*paragraph.length);

    typingText.innerHTML = '';
    for(const char of paragraph[randomIndex]) {
        typingText.innerHTML += `<span>${char}</span>`;
    }
    typingText.querySelectorAll('span')[0].classList.add('active');
    document.addEventListener('keydown', ()=> input.focus());
    typingText.addEventListener('click', () => input.focus());
}

// Handle User-Input
function initTyping() {
    const char = typingText.querySelectorAll('span');
    const typedChar = input.value.charAt(charIndex);
    if(charIndex < char.length && timeLeft > 0) {

        if(!isTyping) {
            timer = setInterval(initTime,1000);
            isTyping = true;
        }
        if(char[charIndex].innerText === typedChar) {
            char[charIndex].classList.add('correct');
            console.log('correct');
        }
        else {
            mistake++;
            char[charIndex].classList.add('incorrect');
            console.log('incorrect');
        }
        charIndex++;
        if(charIndex < char.length && timeLeft > 0) char[charIndex].classList.add('active');
        mistakes.innerText = mistake;
        cpm.innerText = charIndex-mistake;
    }
    else {
        clearInterval(timer);
        input.value = '';
    }
}
function initTime() {
    const char = typingText.querySelectorAll('span');
    if(timeLeft > 0 && charIndex < char.length) {
        timeLeft--;
        time.innerText = timeLeft;
        const wpmValue = Math.round((((charIndex-mistake)/5)/(maxTime - timeLeft))*60);
        wpm.innerText = wpmValue;
    }
    else {
        clearInterval(timer);
        input.value = '';
    }
}

function reset() {
    loadParagraph();
    clearInterval(timer);
    input.value = '';
    timeLeft = maxTime;
    charIndex = 0;
    mistake = 0;
    isTyping = false;
    time.innerText = maxTime;
    mistakes.innerText = 0;
    wpm.innerText=0;
    cpm.innerText = 0;
}
btn.addEventListener('click', reset);
input.addEventListener("input", initTyping);
loadParagraph();


