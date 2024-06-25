let score = 0;
let gameOver = false;




const target = document.getElementById('target');
const gameArea = document.getElementById('gameArea');
const gameOverText = document.getElementById('gameOver');
const start = document.getElementById('start')
const gameCont = document.getElementById('game-container')
const mainMenu = document.getElementById('container')




let dx = Math.random()*8-4; 
let dy = Math.random()*8-4; 



target.style.left = `${Math.random() * (gameArea.clientWidth - target.clientWidth)}px`;
target.style.top = `${Math.random() * (gameArea.clientHeight - target.clientHeight)}px`;





function updateScore() {
  
    score++;
    
    
    let randomColor = `rgb( ${Math.random()*265} , ${Math.random()*265} , ${Math.random()*265} )`
  console.log(randomColor)
  
    dx = Math.random() * 8 - 4; 
    dy = Math.random() * 8 - 4; 
    
    
  target.style.left = `${Math.random() * (gameArea.clientWidth - target.clientWidth)}px`;
  target.style.top = `${Math.random() * (gameArea.clientHeight - target.clientHeight)}px`;
  
  
  target.style.backgroundColor = randomColor
  
  
  

    document.getElementById('score').innerText = score;
    
}





function checkCollision() {
    let targetRect = target.getBoundingClientRect();
    let gameAreaRect = gameArea.getBoundingClientRect();

   
    if (targetRect.left <= gameAreaRect.left || targetRect.right >= gameAreaRect.right) {
        dx = -dx;
    }
   
    if (targetRect.top <= gameAreaRect.top || targetRect.bottom >= gameAreaRect.bottom) {
        dy = -dy;
    }
}



function moveTarget() {
  
    if (!gameOver) {
        let currentX = parseFloat(target.style.left);
        let currentY = parseFloat(target.style.top);

        target.style.left = `${currentX + dx}px`;
        target.style.top = `${currentY + dy}px`;

        checkCollision();
    }
}



function endGame() {
    gameOver = true;
    gameOverText.style.display = 'block';
    target.style.display = 'none';
}



target.addEventListener('click', (event) => {
    event.stopPropagation(); 
    if (!gameOver) {
        updateScore();
        moveTarget(); 
    }
});




gameArea.addEventListener('click', () => {
    if (!gameOver) {
        endGame();
    }
});





setInterval(moveTarget, 20);



start.addEventListener('click',(e)=>{
  gameCont.style.display = 'flex'
  mainMenu.style.display = 'none'
  
})