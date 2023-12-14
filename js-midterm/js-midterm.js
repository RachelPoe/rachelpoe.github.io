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

//create the balls
function createBall(num) {
  const ball = document.createElement('div');
  const txt = document.createTextNode(num);
  ball.appendChild(txt);
  ball.classList.add('ball-overlay-1');
  ball.addEventListener('click', () => handleClick(num));
  return ball;
}

//append all balls
for (let i = 0; i < 10; i++) {
  const ball = createBall(i);
  overlays.appendChild(ball);
}

let boxCount = 1;  //initialize boxCount

function handleClick(num) {
  if (boxCount <= 10) {
    document.querySelector(`.box${boxCount}`).innerHTML = num;
    boxCount += 1;  //increment boxCount for the next box
  }
}

//used the help of ChatGPT for the submit and clear buttons
document.getElementById('clearButton').addEventListener('click', () => {
  //clear the boxes
  for (let i = 1; i <= 10; i++) {
    document.querySelector(`.box${i}`).innerHTML = '';
  }
  boxCount = 1;
});

document.getElementById('submitButton').addEventListener('click', () => {
  //combine the numbers in the boxes and show an alert
  let finalNumber = '';
  for (let i = 1; i <= 10; i++) {
    finalNumber += document.querySelector(`.box${i}`).innerHTML;
  }
  alert(`Your phone number is: ${finalNumber}`);
});

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}
let velX = [Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20))]
let velY = [Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20)), Math.floor(Math.random()*((1000-20)+20))]
let changeX = [2, -2, -2, 2, 2, -2, 2, -2, -2, 2]
let changeY = [-2, 2, -2, 2, -2, -2, -2, 2, 2, -2]

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

    //this handles the right edge of the screen
        if ((parseInt(circles[i].style.left)) >= width) {
            changeX[i] = -3;
        }
    //circles handles the left edge of the screen
        else if ((parseInt(circles[i].style.left)) <= 10) {
            changeX[i] = 3;
        }
    //circles handles the bottom of the screen
        else if (parseInt(circles[i].style.top) >= height) {
            changeY[i] = -3;
        }
    //circles handles the top of the screen
        else if (parseInt(circles[i].style.top) <= 10) {
            changeY[i] = 3;
        }
}
requestAnimationFrame(loop);

}
loop();

//I used ChatGPT to help me finalize my code and work out the kinks