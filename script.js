class Player {
    // Construtor que inicializa as propriedades do jogador
    constructor(name, age, level, race, classs) {
        this.name = name;
        this.age = age;
        this.level = level;
        this.race = race;
        this.classs = classs;
    }

    // Método para simular um ataque do inimigo no jogador
    atacar(nameEnemy, levelEnemy, spellName, spellType, valueHit) {
        console.log(`O inimigo ${nameEnemy} de nível ${levelEnemy} usou ${spellName}/${spellType} no jogador ${this.name} de nível ${this.level}, causando ${valueHit} de dano`);
        console.log(`Mas não se preocupe, ${this.race} aguenta porrada!`);
    }

    // Simula um inimigo com um ataque aleatório
    enemyAttack() {
        const nameEnemy = "Goblin";
        const levelEnemy = 11;
        const spellName = "Fire Ball";
        const spellType = "Fire";

        // Gera um número aleatório para o valor do ataque (dano)
        const min = 1;
        const max = 10;
        const valueHit = Math.floor(Math.random() * (max - min + 1)) + min;

        // Chama o método atacar com os dados do inimigo
        this.atacar(nameEnemy, levelEnemy, spellName, spellType, valueHit);
    }
}

// Criando um novo jogador
const player = new Player("Leonardo", 27, 280, "Undead", "Knight");

// Simulando um ataque do inimigo no jogador
player.enemyAttack();
