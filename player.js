// Declaring variables for heatl points
const maxHP = 100;
let currentHP = maxHP;
// Declaring other important player class based variables
let attackPower;
let mana;
let spellPower;
// Making different player class stats into arrays
const warrior=[100,0,0]
const ranger=[50,50,50]
const Mage=[25,100,100]
// Variable for storing players class
let playerClass;
// function for starting the game
function start(){
    console.log('I have been called in HTML')
    var startGame = document.getElementById('start');
    var chooseClass = document.getElementById('class');
    chooseClass.style.display = "block";
    startGame.style.display = "none";
}
// function for advancing forward from class page
function classChosen(){
    var chooseClass = document.getElementById('class');
    chooseClass.style.display = "none";
    var game = document.getElementById('game')
    game.style.display = "block";
}
// functions for choosing class
function classWarrior(){
    attackPower=warrior[0];
    mana=warrior[1];
    spellPower=warrior[2];
    console.log(`${attackPower} ${mana} ${spellPower}`);
    classChosen();
}
function classRanger(){
    attackPower=ranger[0];
    mana=ranger[1];
    spellPower=ranger[2];
    console.log(`${attackPower} ${mana} ${spellPower}`);
    classChosen();
}
function classMage(){
    attackPower=Mage[0];
    mana=Mage[1];
    spellPower=Mage[2];
    console.log(`${attackPower} ${mana} ${spellPower}`);
    classChosen();
}