// Declaração das variáveis
let heroName = "Arthur"; // Exemplo de nome do herói, você pode substituir
let heroXP = 10500; // Exemplo de experiência (XP), você pode alterar para testar os níveis

// Inicializando a variável para armazenar o nível do herói
let heroLevel;

// Estrutura de decisão para classificar o nível do herói com base na experiência
if (heroXP < 1000) {
    heroLevel = "Ferro";
} else if (heroXP >= 1001 && heroXP <= 2000) {
    heroLevel = "Bronze";
} else if (heroXP >= 2001 && heroXP <= 5000) {
    heroLevel = "Prata";
} else if (heroXP >= 5001 && heroXP <= 7000) {
    heroLevel = "Ouro";
} else if (heroXP >= 7001 && heroXP <= 8000) {
    heroLevel = "Platina";
} else if (heroXP >= 8001 && heroXP <= 9000) {
    heroLevel = "Ascendente";
} else if (heroXP >= 9001 && heroXP <= 10000) {
    heroLevel = "Imortal";
} else if (heroXP >= 10001) {
    heroLevel = "Radiante";
}

// Exibindo a mensagem final com o nível do herói
console.log(`O Herói de nome ${heroName} está no nível de ${heroLevel}`);
