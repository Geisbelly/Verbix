"use client";

import React, { useState, useEffect } from "react";
import "./RankingStyles.css";
import { generateRanking } from "./generateRanking";

interface Jogador {
  posicao: number;
  nome: string;
  pontos: number;
}

interface Ranking {
  total: Jogador[];
  amigos: Jogador[];
}

const categorias = ["Paginas", "Livros", "Sequencia", "Missoes"];

export default function RankingPage() {
  const [mostrarRankingTotal, setMostrarRankingTotal] = useState(true);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Paginas");
  const [rankings, setRankings] = useState<{ [key: string]: Ranking }>({
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
    <div className="ranking-container">
      <div className="header">
        <h1>Ranking do App</h1>
        <div className="category-buttons">
          {categorias.map((categoria) => (
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
        <div className="ranking-toggle">
          <button onClick={() => setMostrarRankingTotal(true)} className={mostrarRankingTotal ? "active" : ""}>
            Ranking Total
          </button>
          <button onClick={() => setMostrarRankingTotal(false)} className={!mostrarRankingTotal ? "active" : ""}>
            Ranking Entre Amigos
          </button>
        </div>
      </div>
      <div className="main-content">
        <div className="top-three-container">
          <div className="top-three">
            {rankingAtual.slice(0, 3).map((jogador, index) => (
              <div key={jogador.posicao} className={`player ${index === 0 ? "first" : ""}`}>
                <img src={`/trofeus${index + 1}.png`} alt={`Troféu ${index + 1}`} className="trophy" />
                <div className="name">{jogador.nome}</div>
                <div className="points">{jogador.pontos} PL</div>
              </div>
            ))}
          </div>
        </div>
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
  );
}