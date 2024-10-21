"use client";

import React, { useState, useEffect } from "react";

const nomes = [
  // Lista de nomes, como antes
  "Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda", "Gabriel", "Helena", "Igor", "Juliana",
  "Kleber", "Larissa", "Marcos", "Natália", "Otávio", "Patrícia", "Quintino", "Rafaela", "Sérgio", "Tatiana",
  "Ursula", "Vinícius", "Wagner", "Ximena", "Yuri", "Zuleica", "Alberto", "Beatriz", "Caio", "Diana",
  // Restante dos nomes...
];

// Função para gerar rankings aleatórios
// Função para gerar rankings aleatórios
const generateRanking = (numPlayers: number) => {
  const ranking = Array.from({ length: numPlayers }, (_, i) => ({
    posicao: i + 1,
    nome: nomes[i % nomes.length],
    pontos: Math.floor(Math.random() * 1000), // Pontos aleatórios entre 0 e 1000
  }));

  ranking.sort((a, b) => b.pontos - a.pontos); // Ordena em ordem decrescente de pontos
  ranking.forEach((jogador, index) => {
    jogador.posicao = index + 1;
  });

  return ranking;
};

export default function RankingPage() {
  const [mostrarRankingTotal, setMostrarRankingTotal] = useState(true);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Paginas");
  const [rankings, setRankings] = useState({
    Paginas: { total: [], amigos: [] },
    Livros: { total: [], amigos: [] },
    Sequencia: { total: [], amigos: [] },
    Missoes: { total: [], amigos: [] },
  });

  useEffect(() => {
    setRankings({
      Paginas: { total: generateRanking(100), amigos: generateRanking(10) },
      Livros: { total: generateRanking(100), amigos: generateRanking(10) },
      Sequencia: { total: generateRanking(100), amigos: generateRanking(10) },
      Missoes: { total: generateRanking(100), amigos: generateRanking(10) },
    });
  }, []);

  const rankingAtual = mostrarRankingTotal
    ? rankings[categoriaSelecionada].total
    : rankings[categoriaSelecionada].amigos;

  return (
    <div style={{ display: "flex", height: "100vh", margin: "0", padding: "0" }}>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            font-family: Arial, Helvetica, sans-serif;
          }

          /* Contêiner principal com layout flex */
          .container {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100vh;
          }

          /* Estilo para o cabeçalho */
          .header {
            position: sticky;
            top: 0;
            background-color: #2596be;
            color: white;
            padding: 10px 0;
            text-align: center;
            z-index: 100;
          }

          /* Botões de categorias com flexbox */
          .category-buttons {
            display: flex;
            justify-content: center;
            margin-bottom: 10px;
            gap: 10px;
          }

          .category-button {
            padding: 10px 20px;
            border: none;
            background: #2596be;
            color: white;
            font-size: 16px;
            cursor: pointer;
          }

          .category-button.selected {
            background-color: #0a74da;
            font-size: 18px;
            font-weight: bold;
            padding: 12px 22px;
          }

          /* Conteúdo principal com dois lados */
          .main-content {
            display: flex;
            flex: 1;
            height: 100%;
          }

          /* Lado esquerdo com os três primeiros colocados */
          .top-three-container {
            width: 50%;
            padding: 20px;
            background: #E8F6FF;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
          }

          .top-three {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 20px;
          }

          .top-three .player {
            text-align: center;
            flex: 1;
          }

          .top-three .player img {
            width: 60px;
            height: 60px;
          }

          .top-three .player:first-child {
            order: 2;
            font-size: 2em;
          }

          .top-three .player:nth-child(2) {
            order: 1;
            font-size: 1.5em;
          }

          .top-three .player:nth-child(3) {
            order: 3;
            font-size: 1.5em;
          }

          /* Lado direito com a lista de jogadores abaixo do top 3 */
          .ranking-list-container {
            width: 50%;
            padding: 20px;
            background: #E8F6FF;
            overflow-y: auto;
            height: 100%;
          }

          .ranking-list-container ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .ranking-list-container li {
            margin-bottom: 10px;
          }

          /* Responsividade */
          @media (max-width: 768px) {
            .main-content {
              flex-direction: column;
            }

            .ranking-list-container, .top-three-container {
              width: 100%;
              height: 50%;
            }

            .top-three {
              flex-direction: column;
            }

            .category-buttons {
              flex-direction: column;
              gap: 5px;
            }

            .category-button {
              font-size: 14px;
            }
          }
        `}
      </style>

      <div className="container">
        <div className="header">
          <h1>Ranking do App</h1>
          <div className="category-buttons">
            {["Paginas", "Livros", "Sequencia", "Missoes"].map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaSelecionada(categoria)}
                className={`category-button ${
                  categoriaSelecionada === categoria ? "selected" : ""
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>

          {/* Botões para alternar entre ranking total e amigos */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
            <button onClick={() => setMostrarRankingTotal(true)} style={{ marginRight: "10px" }}>
              Ranking Total
            </button>
            <button onClick={() => setMostrarRankingTotal(false)}>Ranking Entre Amigos</button>
          </div>
        </div>

        <div className="main-content">
          {/* Top 3 jogadores agora no lado esquerdo */}
          <div className="top-three-container">
            <div className="top-three">
              {rankingAtual.slice(0, 3).map((jogador, index) => (
                <div key={jogador.posicao} className="player">
                  <img src={`/trofeus${index + 1}.png`} alt={`Troféu ${index + 1}`} />
                  <div>{jogador.posicao}º - {jogador.nome}</div>
                  <div>{jogador.pontos} PL</div>
                </div>
              ))}
            </div>
          </div>

          {/* Lista de jogadores abaixo do top 3 agora no lado direito */}
          <div className="ranking-list-container">
            <ul>
              {rankingAtual.slice(3).map((jogador) => (
                <li key={jogador.posicao}>
                  {jogador.posicao}º - {jogador.nome} - {jogador.pontos} PL
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
