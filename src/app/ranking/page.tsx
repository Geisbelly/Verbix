"use client";

import React, { useState } from 'react';

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

// Criar uma lista de 100 jogadores com pontuações aleatórias para o ranking total
const rankingTotal = Array.from({ length: 100 }, (_, i) => ({
  posicao: i + 1,
  nome: nomes[i % nomes.length],
  pontos: Math.floor(Math.random() * 1000) // Pontuação aleatória entre 0 e 999
}));

// Ordenar a lista de jogadores por pontuação
rankingTotal.sort((a, b) => b.pontos - a.pontos);

// Atualizar a posição dos jogadores após a ordenação
rankingTotal.forEach((jogador, index) => {
  jogador.posicao = index + 1;
});

// Criar uma lista de 10 jogadores com pontuações aleatórias para o ranking entre amigos
const rankingAmigos = Array.from({ length: 10 }, (_, i) => ({
  posicao: i + 1,
  nome: nomes[(i + 10) % nomes.length],
  pontos: Math.floor(Math.random() * 1000) // Pontuação aleatória entre 0 e 999
}));

// Ordenar a lista de jogadores por pontuação
rankingAmigos.sort((a, b) => b.pontos - a.pontos);

// Atualizar a posição dos jogadores após a ordenação
rankingAmigos.forEach((jogador, index) => {
  jogador.posicao = index + 1;
});

export default function RankingPage() {
  const [mostrarRankingTotal, setMostrarRankingTotal] = useState(true);

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

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#E8F6FF', color: '#3F3F3F', overflowY: 'auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '0px' }}>
          <h1>Ranking do App</h1>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <button onClick={() => setMostrarRankingTotal(true)} style={{ marginRight: '10px' }}>Ranking Total</button>
            <button onClick={() => setMostrarRankingTotal(false)}>Ranking Entre Amigos</button>
          </div>
          <ul>
            {ranking.map((jogador, index) => (
              <li key={jogador.posicao}>
                {index < 3 ? (
                  <>
                    <img src={`/trofeu${index + 1}.svg`} alt={`Troféu ${index + 1}`} style={{ width: '20px', height: '20px' }} />
                    {jogador.posicao}º - {jogador.nome}: {jogador.pontos} PL
                  </>
                ) : (
                  <span>
                    {jogador.posicao}º - {jogador.nome}: {jogador.pontos} PL
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
