const nomes = [
  "Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda", "Gabriel", "Helena", "Igor", "Juliana",
  "Kleber", "Larissa", "Marcos", "Natália", "Otávio", "Patrícia", "Quintino", "Rafaela", "Sérgio", "Tatiana",
  "Ursula", "Vinícius", "Wagner", "Ximena", "Yuri", "Zuleica", "Alberto", "Beatriz", "Caio", "Diana",
];

export const generateRanking = (numPlayers: number) => {
  const ranking = Array.from({ length: numPlayers }, (_, i) => ({
    posicao: i + 1,
    nome: nomes[i % nomes.length],
    pontos: Math.floor(Math.random() * 1000),
  }));

  ranking.sort((a, b) => b.pontos - a.pontos);
  ranking.forEach((jogador, index) => {
    jogador.posicao = index + 1;
  });

  return ranking;
};