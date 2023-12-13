const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const box5 = document.querySelector('.box5');
const box6 = document.querySelector('.box6');
const box7 = document.querySelector('.box7');
const box8 = document.querySelector('.box8');
const box9 = document.querySelector('.box9');
const box10 = document.querySelector('.box10');

const overlays = document.querySelector('.overlays');

//Create the balls
const ball0 = document.createElement('div');
let txt = document.createTextNode('0'); //change that number
ball0.appendChild(txt);
ball0.classList.add('ball-overlay-1');
ball0.addEventListener('click', () => handleClick(0)); //replace that number with the right one

const ball1 = document.createElement('div');
let txt1 = document.createTextNode('1'); //change that number
ball1.appendChild(txt);
ball1.classList.add('ball-overlay-1');
ball1.addEventListener('click', () => handleClick(1)); //replace that number with the right one

const ball2 = document.createElement('div');
let txt2 = document.createTextNode('2'); //change that number
ball2.appendChild(txt);
ball2.classList.add('ball-overlay-1');
ball2.addEventListener('click', () => handleClick(2)); //replace that number with the right one

const ball3 = document.createElement('div');
let txt3 = document.createTextNode('3'); //change that number
ball3.appendChild(txt);
ball3.classList.add('ball-overlay-1');
ball3.addEventListener('click', () => handleClick(3)); //replace that number with the right one

const ball4 = document.createElement('div');
let txt4 = document.createTextNode('4'); //change that number
ball4.appendChild(txt);
ball4.classList.add('ball-overlay-1');
ball4.addEventListener('click', () => handleClick(4)); //replace that number with the right one

const ball5 = document.createElement('div');
let txt5 = document.createTextNode('5'); //change that number
ball5.appendChild(txt);
ball5.classList.add('ball-overlay-1');
ball5.addEventListener('click', () => handleClick(5)); //replace that number with the right one

const ball6 = document.createElement('div');
let txt6 = document.createTextNode('6'); //change that number
ball6.appendChild(txt);
ball6.classList.add('ball-overlay-1');
ball6.addEventListener('click', () => handleClick(6)); //replace that number with the right one

const ball7 = document.createElement('div');
let txt7 = document.createTextNode('7'); //change that number
ball7.appendChild(txt);
ball7.classList.add('ball-overlay-1');
ball7.addEventListener('click', () => handleClick(7)); //replace that number with the right one

const ball8 = document.createElement('div');
let txt8 = document.createTextNode('8'); //change that number
ball8.appendChild(txt);
ball8.classList.add('ball-overlay-1');
ball8.addEventListener('click', () => handleClick(8)); //replace that number with the right one

const ball9 = document.createElement('div');
let txt9 = document.createTextNode('9'); //change that number
ball9.appendChild(txt);
ball9.classList.add('ball-overlay-1');
ball9.addEventListener('click', () => handleClick(9)); //replace that number with the right one

//DONT TOUCH
function handleClick(num){
    if(boxCount == 1){
            box1.innerHTML = num;
          }
          if(boxCount == 2){
            box2.innerHTML = num;
          }
          if(boxCount == 3){
            box3.innerHTML = num;
          }
          if(boxCount == 4){
            box4.innerHTML = num;
          }
          if(boxCount == 5){
            box5.innerHTML = num;
          }
          if(boxCount == 6){
            box6.innerHTML = num;
          }
          if(boxCount == 7){
            box7.innerHTML = num;
          }
          if(boxCount == 8){
            box8.innerHTML = num;
          }
          if(boxCount == 9){
            box9.innerHTML = num;
          }
          if(boxCount == 10){
            box10.innerHTML = num;
          }
          boxCount +=1;
}

//Appends all balls
overlays.appendChild(ball0);
overlays.appendChild(ball1);
overlays.appendChild(ball2);
overlays.appendChild(ball3);
overlays.appendChild(ball4);
overlays.appendChild(ball5);
overlays.appendChild(ball6);
overlays.appendChild(ball7);
overlays.appendChild(ball8);
overlays.appendChild(ball9);

let boxCount = 1

// Used the help of ChatGPT for the submit and clear buttons
document.getElementById('clearButton').addEventListener('click', () => {
  // Clear the boxes
  for (let i = 1; i <= 10; i++) {
    document.querySelector(`.box${i}`).innerHTML = '';
  }
  boxCount = 1;
});

document.getElementById('submitButton').addEventListener('click', () => {
  // Combine the numbers in the boxes and show an alert
  let finalNumber = '';
  for (let i = 1; i <= 10; i++) {
    finalNumber += document.querySelector(`.box${i}`).innerHTML;
  }
  alert(`The number you want to submit is: ${finalNumber}`);
});

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}
let velX = [Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20))]
let velY = [Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20))]
let changeX = [2, -2, -2, 2, 2, -2, 2, -2, -2, 2]
let changeY = [-2, 2, -2, 2, -2, -2, -2, 2, 2, -2]
//convert string to num, add num, and convert back to string
const inputString = [5, 8, -4, 2, 7, 2, 10, 15, 6, 12];
const inputNumber = parseInt(inputString);
const addedNumber = inputNumber + random
const resultString = addedNumber.toString();

function loop() {

    //loop through overlays
    let circles = document.querySelectorAll('.ball-overlay-1');
    let width = screen.width-100;
    let height = screen.height-200;
    for(let i = 0; i < circles.length; i++) {
        circles[i].style.left = velX[i] + 'px';
        circles[i].style.top = velY[i] + 'px';
        velX[i] += changeX[i];
        velY[i] += changeY[i];

    // this handles the right edge of the screen
        if ((parseInt(circles[i].style.left)) >= width) {
            changeX[i] = -2;
        }
    // circles handles the left edge of the screen
        else if ((parseInt(circles[i].style.left)) <= 10) {
            changeX[i] = 2;
        }
    // circles handles the bottom of the screen
        else if (parseInt(circles[i].style.top) >= height) {
            changeY[i] = -2;
        }
    // circles handles the top of the screen
        else if (parseInt(circles[i].style.top) <= 10) {
            changeY[i] = 2;
        }
}
requestAnimationFrame(loop);

}
loop();

