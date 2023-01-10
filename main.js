let enemy1 = new Enemy();
// function to test console log values to see if they are what they should be and change as needed
function consoleLog(){
    newEnemy();
    console.log('Player stats: \n HP: ' + currentHP + ' attackPower: ' + attackPower + ' mana: ' + mana + ' spellPower: ' + spellPower);
    console.log('Enemy stats: \n HP: ' + enemy1.HP + ' attackPower: ' + enemy1.attackP + ' mana: ' + enemy1.manaAmount + ' spellPower: ' + enemy1.SpellPower);
    console.log();
    console.log();
    console.log();
}
// function to make enemy

function newEnemy(){
    enemy1.setAttack(50);
    enemy1.setHealth(100);
    enemy1.setMana(50);
    enemy1.setSpellPower(50);
}