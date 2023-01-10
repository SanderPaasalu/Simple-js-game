// class for enemy
class Enemy{
    constructor(health, attack, mana, spellPower){
        this.setHealth(health);
        this.setAttack(attack);
        this.setMana(mana);
        this.setSpellPower(spellPower);
    }
    // set different enemy stats
    setHealth(newHealth){
        newHealth = newHealth;
        this.health = newHealth;
    }

    setAttack(newAttack){
        newAttack = newAttack;
        this.attack = newAttack;
    }
    setMana(newMana){
        newMana = newMana;
        this.mana = newMana;
    }
    setSpellPower(newSpellPower){
        newSpellPower = newSpellPower;
        this.spellPower = newSpellPower;
    }
    // get different enemy stats
    get HP(){
        return this.health;
    }

    get attackP(){
        return this.attack;
    }

    get manaAmount(){
        return this.mana;
    }

    get SpellPower(){
        return this.spellPower;
    }
    
}