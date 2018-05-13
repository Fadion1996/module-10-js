const lang = "qwerty";
const string = "qryte";
const charsArr = string.split("");
//секундомер
let seconds = 00;
let tens = 00;
const appendTens = document.getElementById("tens")
const appendSeconds = document.getElementById("seconds")
const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split('');
let word = [];
let interval;
let result = [];
let oldData = localStorage.getItem('kps');

const exercise = document.querySelector('#exercise').textContent = string;
const keyboard = document.querySelector('#keyboard');
let record = document.querySelector('#record');
record.textContent = oldData;

document.onkeydown = function (e) {
    let keyCode = e.key;
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
    check(keyCode)
};

function check (key) {
  let checkWord = alphabet.find(elem => elem == key);
  if (checkWord == key && result.length < 5) word.push(key);
  let char = charsArr.find(elem => elem == key);
  if (char == key) {
    result.includes(key)
    ?  console.log('The same word!')
    :  result.push(key)
  }
  result.length == 5
  ? (keyboard.textContent = word.join(''), clearInterval(interval), countKPS(seconds, tens, word.length))
  : keyboard.textContent = word.join('')
}

function startTimer () {
   tens++;

   if (tens < 9) appendTens.textContent = "0" + tens;

   if (tens > 9) appendTens.textContent = tens;

   if (tens > 99) {
     seconds++;
     appendSeconds.textContent = "0" + seconds;
     tens = 0;
     appendTens.textContent = "0" + 0;
   }

   if (seconds > 9) appendSeconds.textContent = seconds;
}

const countKPS = (seconds, tens, chars) => {
  kps = chars / (seconds + tens / 100);
  parseFloat(oldData) > kps
  ? console.log('You need more practice!')
  : (localStorage.setItem('kps', kps),
    record.textContent = kps)
}

document.getElementById("reset").addEventListener("click", reset);

function reset() {
    localStorage.removeItem('kps');
}
