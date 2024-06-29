let score = 0;
let gameOver = false;




const target = document.getElementById('target');
const gameArea = document.getElementById('gameArea');
const gameOverText = document.getElementById('gameOver');
const adFrame = document.getElementById('ad-frame')



const start = document.getElementById('start')
const restart = document.getElementById('restart')
const gameContinue = document.getElementById('continue')
const closeBtn = document.getElementById('close-btn')


const gameCont = document.getElementById('game-container')
const mainMenu = document.getElementById('start-container')
const endCont = document.getElementById('end-container')
const adCont = document.getElementById('ad-container')

const startScore = document.getElementById('score')
const endScore = document.getElementById('end-score')


let dx = Math.random()*8-4; 
let dy = Math.random()*8-4; 



target.style.left = `${Math.random() * (gameArea.clientWidth - target.clientWidth)}px`;
target.style.top = `${Math.random() * (gameArea.clientHeight - target.clientHeight)}px`;





function updateScore() {
  
    score++;
    
    
    let randomColor = `rgb( ${Math.random()*265} , ${Math.random()*265} , ${Math.random()*265} )`
  
    dx = Math.random() * 8 - 4; 
    dy = Math.random() * 8 - 4; 
    
    
  target.style.left = `${Math.random() * (gameArea.clientWidth - target.clientWidth)}px`;
  target.style.top = `${Math.random() * (gameArea.clientHeight - target.clientHeight)}px`;
  
  
  target.style.backgroundColor = randomColor
  
  
  

  startScore.innerText = score;
    
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
  endCont.style.display = 'flex'
  gameCont.style.display = 'none'
    gameOver = true; 
    gameOverText.style.display = 'block';
    target.style.display = 'none';
    endScore.innerText = `Score: ${score}`;
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


restart.addEventListener('click',(e)=>{
  endCont.style.display = 'none'
  gameCont.style.display = 'flex'
  target.style.display = 'block'
  gameOver = false
  score = 0
  startScore.innerText = score
  endScore.innerText = score
})

gameContinue.addEventListener('click',(e)=>{
  endCont.style.display = 'none'
  gameCont.style.display = 'none'
  target.style.display = 'none'
  
  adCont.style.display = 'flex'
  adFrame.innerHTML = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5742819658274735"
     crossorigin="anonymous"></script>
<!-- D1 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-5742819658274735"
     data-ad-slot="7588043807"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>`
  
  
})

closeBtn.addEventListener('click',(e)=>{
  gameCont.style.display = 'flex'
  adCont.style.display = 'none'
  target.style.display = 'block'
  gameOver = false
  startScore.innerText = score
  endScore.innerText = score
})