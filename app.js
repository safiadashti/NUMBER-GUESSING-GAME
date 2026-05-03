alert("🎮Welcome to Number Guessing Game! Good Luck💗");
 
let guessInput = document.getElementById('number');
let check = document.getElementById('check');
let result = document.getElementById('result');
let restart = document.getElementById('restart');
let scoreE1= document.getElementById("score") ;
let highscoreE1 = document.getElementById("highscore");
let score = 20
let highscore =0

let randomNum = Math.floor (Math.random() *100 )+1;

check.addEventListener('click' , ()=>{
    let guess = Number(guessInput.value); 
    if(guess < 1 || guess>100){
        result.textContent = 'Enter a number b/W 1 to 100';
        result.style.color = "red";
        return;
    }
    else if(guess === randomNum){
        result.textContent = 'Congratulations 🎉, You guess it Right 💗';
        result.style.color = "green";
        check.disabled = true;
        restart.style.display = 'block';
    
    if (score > highscore) {
    highscore = score;
    highscoreE1.textContent = highscore;
}
    }
    else{
    result.textContent = guess < randomNum ? "Too low! Try again 👎" : "Too high! Try again 👎";
    result.style.color = "orange";
    
    if (score >1) {
    score--;
    scoreE1.textContent = score;
 } 
 else{
    scoreE1.textContent =0;
 }
}
    guessInput.value="";
    guessInput.focus();
});

restart.addEventListener('click', ()=>{
    randomNum = Math.floor(Math.random() * 100) + 1;
    score = 20;
scoreE1.textContent=score;
    result.textContent = "";
    check.disabled = false;
    restart.style.display = 'none';
    guessInput.focus();
})
