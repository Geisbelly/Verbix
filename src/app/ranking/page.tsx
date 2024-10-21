"use client";

import React, { useState, useEffect } from 'react';

// Lista de nomes de pessoas reais
const nomes = [
  "Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda", "Gabriel", "Helena", "Igor", "Juliana",
  "Kleber", "Larissa", "Marcos", "Natália", "Otávio", "Patrícia", "Quintino", "Rafaela", "Sérgio", "Tatiana",
  "Ursula", "Vinícius", "Wagner", "Ximena", "Yuri", "Zuleica", "Alberto", "Beatriz", "Caio", "Diana",
  "Elisa", "Fábio", "Giovana", "Hugo", "Isabela", "João", "Karen", "Leonardo", "Marta", "Nicolas",
  "Olga", "Paulo", "Quésia", "Renato", "Sabrina", "Thiago", "Ulisses", "Valéria", "William", "Xavier",
  "Yasmin", "Zeca", "Amanda", "Bernardo", "Catarina", "Diego", "Emília", "Felipe", "Gustavo", "Heloísa",
  "Iara", "Jorge", "Kátia", "Luiz", "Mariana", "Nelson", "Olívia", "Pedro", "Quirino", "Roberta",
  "Samuel", "Teresa", "Ubirajara", "Vera", "Wesley", "Xuxa", "Yago", "Zilda", "Arthur", "Bianca",
  "Cláudio", "Débora", "Estela", "Fernando", "Gisele", "Henrique", "Inês", "José", "Karla", "Lucas"
];

const generateRanking = (numPlayers) => {
  const ranking = Array.from({ length: numPlayers }, (_, i) => ({
    posicao: i + 1,
    nome: nomes[i % nomes.length],
    pontos: Math.floor(Math.random() * 1000) // Pontuação aleatória entre 0 e 999
  }));

  // Ordenar a lista de jogadores por pontuação
  ranking.sort((a, b) => b.pontos - a.pontos);

  // Atualizar a posição dos jogadores após a ordenação
  ranking.forEach((jogador, index) => {
    jogador.posicao = index + 1;
  });

  return ranking;
};

export default function RankingPage() {
  const [mostrarRankingTotal, setMostrarRankingTotal] = useState(true);
  const [rankingTotal, setRankingTotal] = useState([]);
  const [rankingAmigos, setRankingAmigos] = useState([]);

  useEffect(() => {
    setRankingTotal(generateRanking(100));
    setRankingAmigos(generateRanking(10));
  }, []);

  const ranking = mostrarRankingTotal ? rankingTotal : rankingAmigos;

  return (
    <div style={{ display: 'flex', height: '100vh', margin: '0', padding: '0' }}>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            overflow: hidden; 
            font-family: Arial, Helvetica, sans-serif;
          }
          .top-three-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 50%;
            background: #E8F6FF;
            padding: 20px;
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
            width: 40px;
            height: 40px;
          }
          .top-three .player:first-child {
            order: 2;
            font-size: 2em; /* Maior tamanho para o 1º colocado */
          }
          .top-three .player:nth-child(2) {
            order: 1;
            font-size: 1.5em; /* Tamanho padrão para o 2º colocado */
          }
          .top-three .player:nth-child(3) {
            order: 3;
            font-size: 1.5em; /* Tamanho padrão para o 3º colocado */
          }
          .ranking-list-container {
            width: 50%;
            overflow-y: auto;
            padding: 20px;
            background: #E8F6FF;
          }
        `}
      </style>

      <aside style={{ display: 'flex', width: '6%', flexDirection: 'column', padding: '10px', alignItems: 'center', background:'#2596be' }}>
        <div id="logo" style={{ alignSelf: 'center' }}>
          <img src="/logo.png" alt="Logo" style={{ width: '80px', height: '80px' }} />
        </div>

        <nav style={{ flex: 1, alignContent: 'center', textAlign: 'center' }}>
          <a href="biblioteca" style={{ textDecoration: 'none', color: '#FFFFFF' }}>
            <div style={{ margin: '0px', padding: '20px 16px' }}>
              Biblioteca
            </div>
          </a>

          <a href="leitura" style={{ textDecoration: 'none', color: '#FFFFFF' }}>
            <div style={{ margin: '0px', padding: '20px 16px' }}>
              Leitura
            </div>
          </a>

          <a href="ranking" style={{ textDecoration: 'none', color: '#2596be', fontWeight: '550' }}>
            <div style={{ margin: '0px', padding: '20px 16px', background: '#E8F6FF' }}>
              Ranks
            </div>
          </a>

          <a href="perfil" style={{ textDecoration: 'none', color: '#FFFFFF' }}>
            <div style={{ margin: '0px', padding: '20px 16px' }}>
              Perfil
            </div>
          </a>
        </nav>

        <div id="menu-inferior" style={{ marginTop: 'auto', marginBottom: '20px', textAlign: 'center' }}>
          <button style={{ background: "None", border: 'None', marginBottom: '8px' }} onClick={() => { window.location.href = 'login' }}>
            <img src="/logout.svg" alt="sair" style={{ width: '40px', height: '40px' }} />
          </button>
          <button style={{ background: "None", border: 'None' }} onClick={() => { window.location.href = 'login' }}>
            <img src="/config.svg" alt="configurações" style={{ width: '42px', height: '42px' }} />
          </button>
        </div>
      </aside>

      <main style={{ display: 'flex', flex: 1, background: '#E8F6FF', color: '#3F3F3F' }}>
        <div className="top-three-container">
          <h1>Ranking do App</h1>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <button onClick={() => setMostrarRankingTotal(true)} style={{ marginRight: '10px' }}>Ranking Total</button>
            <button onClick={() => setMostrarRankingTotal(false)}>Ranking Entre Amigos</button>
          </div>
          <div className="top-three">
            {ranking.slice(0, 3).map((jogador, index) => (
              <div key={jogador.posicao} className="player">
                <img src={`/trofeu${index + 1}.svg`} alt={`Troféu ${index + 1}`} />
                <div>{jogador.posicao}º - {jogador.nome}</div>
                <div>{jogador.pontos} PL</div>
              </div>
            ))}
          </div>
        </div>
        <div className="ranking-list-container">
          <ul className="ranking-list">
            {ranking.slice(3).map((jogador) => (
              <li key={jogador.posicao}>
                {jogador.posicao}º - {jogador.nome}: {jogador.pontos} PL
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
