let score = 0;
let enemy1 = new Enemy();
// game stages/elements that are initialy hidden
var prep = document.getElementById('prep');
var game = document.getElementById('game');
var startGame = document.getElementById('start');
var beginButton = document.getElementById('beginTheFun');
var debugging = document.getElementById('debugging');
var deadEnemy = document.getElementById('enemyDestroyed');
var enemyView = document.getElementById('enemy');
// function for starting the game
function start(){
    prep.style.display = "block";
    startGame.style.display = "none";
}

// function to make enemy and store their default stat values
let enemyHp = 0;
let enemyAttack;
let enemyMana;
let enemySpellP
function newEnemy(){
    enemy1.setAttack(10);
    enemy1.setHealth(100);
    enemy1.setMana(50);
    enemy1.setSpellPower(50);
    enemyHp = enemy1.HP;
    enemyAttack = enemy1.attackP;
    enemyMana = enemy1.manaAmount;
    enemySpellP = enemy1.spellPower;
}

// function Loads stats, creates enemy, begins game
function beginTheFun()
{
    // Generate first enemy of the game
    newEnemy();
    // button that begins the game by showing enemy, player stats and actions
    beginButton.style.display = "none";
    // end prep for game and start the game
    prep.style.display = "none";
    
    game.style.display = "block";
    // Load player stats
    document.getElementById('playerHP').innerHTML = `HP ${currentHP}`;
    document.getElementById('playerMana').innerHTML = `Mana ${mana}`;
    // Load enemy stats
    document.getElementById('enemyHP').innerHTML = `HP ${enemyHp}`;
    document.getElementById('enemyMana').innerHTML = `Mana ${enemyMana}`;
    
}

function attackEnemy(){
    console.log('Attacked the enemy!');
    enemyHp = enemyHp - attackPower;
    if(enemyHp>0){
        document.getElementById('enemyHP').innerHTML = `HP ${enemyHp}`;
    } else if(enemyHp<=0){
        enemyView.style.display = 'none';
        deadEnemy.style.display = 'block';
    }
}

function KILLED(){
    if(enemyView.style.display === 'none'){
        enemyView.style.display = 'block';
        deadEnemy.style.display = 'none';  
        newEnemy();
        document.getElementById('enemyHP').innerHTML = `HP ${enemyHp}`;
        document.getElementById('enemyMana').innerHTML = `Mana ${enemyMana}`;
    }else{
        console.log("No more innocents to kill, I'm afraid");
    }
}

// DEBUGGING/CHEAT OPTIONS
// function to test console log values to see if they are what they should be and change as needed
function consoleLog(){
    console.log('Player stats: \n HP: ' + currentHP + ' attackPower: ' + attackPower + ' mana: ' + mana + ' spellPower: ' + spellPower);
    console.log('Enemy stats: \n HP: ' + enemyHp+ ' attackPower: ' + enemyAttack + ' mana: ' + enemyMana + ' spellPower: ' + enemySpellP);
    console.log();
    console.log();
    console.log();
}
// debugging menu open
function openDebugging(){
    debugging.style.display = 'block';
}
// debugging menu close
function closeDebugging(){
    debugging.style.display = 'none';
}

function killEnemy(){
    enemyHp -= 10000
}