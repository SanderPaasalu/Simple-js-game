let score = 0;
let enemy1 = new Enemy();

// function for starting the game
function start(){
    console.log('I have been called in HTML')
    var startGame = document.getElementById('start');
    var chooseClass = document.getElementById('class');
    chooseClass.style.display = "block";
    startGame.style.display = "none";
}

// function to make enemy and store their default stat values
let enemyHp;
let enemyAttack;
let enemyMana;
let enemySpellP
function newEnemy(){
    enemy1.setAttack(50);
    enemy1.setHealth(100);
    enemy1.setMana(50);
    enemy1.setSpellPower(50);
    enemyHp = enemy1.HP;
    enemyAttack = enemy1.attackP;
    enemyMana = enemy1.manaAmount;
    enemySpellP = enemy1.spellPower;
}

// function to test console log values to see if they are what they should be and change as needed
function consoleLog(){
    newEnemy();
    console.log('Player stats: \n HP: ' + currentHP + ' attackPower: ' + attackPower + ' mana: ' + mana + ' spellPower: ' + spellPower);
    console.log('Enemy stats: \n HP: ' + enemyHp+ ' attackPower: ' + enemyAttack + ' mana: ' + enemyMana + ' spellPower: ' + enemySpellP);
    console.log();
    console.log();
    console.log();
}