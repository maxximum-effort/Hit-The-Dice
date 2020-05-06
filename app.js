/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/




//start
var scores,roundscore,activePlayer,gamePlaying;

init();




document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying){
        
        
        //rollbutton clicked
    console.log('roll button clicked');
    
    //get random dice number
    var dice = Math.floor(Math.random() * 6) +1; 
    //display that dice
    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';
    
    //update current score if dice=!1;
    
    if(dice !== 1){
        roundscore += dice;
        document.querySelector('#current-'+activePlayer).textContent=roundscore;
        
    }
    else{
        
        //next player
        nextPlayer();
        
    
    }
    }
    
    
      
    
});


document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        
        //add current score to global score
    scores[activePlayer]+=roundscore;
    
    
    //update UI
    document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
    
    //move to next player
    
    //next player
    //nextPlayer()
    
    //check if player won 
    
    if(scores[activePlayer]>=100){
        document.querySelector('#name-'+activePlayer).textContent='WINNER';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gamePlaying=false;
    }
    else{
        nextPlayer();
    }
    }
    
    
    
    
});


function nextPlayer(){
    
    
        activePlayer === 0 ? activePlayer=1 : activePlayer=0;
        roundscore=0;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
            
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.remove('active');
        
        document.querySelector('.dice').style.display = 'none';
}

//when newgame button is clicked
document.querySelector('.btn-new').addEventListener('click', init);
                                                    
                                                    

function init(){
scores=[0,0];
roundscore=0;
activePlayer=0;
gamePlaying=true;
document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-1').textContent='Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
   

}
