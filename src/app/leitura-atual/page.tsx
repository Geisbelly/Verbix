"use client";
import React, { useState } from 'react';

export default function Leituras() {
  const leiturasAvaliadas = [
    { id: 1, titulo: "Harry Potte e o Prisioneiro de Askaban", descricao: "Descubra os mistérios escondidos na floresta encantada." },
    { id: 2, titulo: "O Pequeno Principe", descricao: "Uma viagem pelo espaço com muitas surpresas!" },
    { id: 3, titulo: "Os Lusíadas", descricao: "Uma história cheia de mistérios" },
  ];

  const livrosPorGenero = {
    Aventura: ["Aventura na Floresta", "Expedição nas Montanhas"],
    Ficcao: ["O Pequeno Astronauta", "Realidade Alternativa"],
    Suspense: ["O Segredo do Castelo", "Mistério na Vila"],
  };

  const [generoSelecionado, setGeneroSelecionado] = useState<string | null>(null);

  // Alterna o gênero selecionado
  const handleGeneroChange = (genero: string) => {
    setGeneroSelecionado(generoSelecionado === genero ? null : genero);
  };

  return (
    <div style={{ padding: '20px', width: '1200px'}}>
      <h1 style={{ color: '#480c8d', fontSize: '2em', fontWeight: 'bold', textAlign: 'center' }}>
        Leituras Disponíveis
      </h1>
      <p style={{ color: '#3F3F3F', textAlign: 'center', marginBottom: '40px' }}>
        Explore as leituras mais bem avaliadas e escolha seu gênero favorito!
      </p>

      {/* Contêiner Superior - Leituras mais bem avaliadas */}
      <div style={{
        backgroundColor: '#1eaeeb',
        borderRadius: '10px',
        padding: '20px',
        marginBottom: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{ color: '#ffffff', fontSize: '1.5em', fontWeight: 'bold', textAlign: 'center' }}>Mais bem avaliadas</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {leiturasAvaliadas.map((leitura) => (
            <div key={leitura.id} style={{
              backgroundColor: '#ffffff',
              border: '2px solid #480c8d',
              borderRadius: '10px',
              padding: '20px',
              margin: '10px',
              width: '200px',
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{ color: '#480c8d' }}>{leitura.titulo}</h3>
              <p style={{ color: '#3F3F3F' }}>{leitura.descricao}</p>
              <button style={{
                backgroundColor: '#e956f0',
                color: '#ffffff',
                padding: '8px 12px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '10px'
              }}>
                Ler agora
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Contêiner Inferior - Checkboxes de Gêneros e Livros */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      }}>
        <h3 style={{ color: '#480c8d', fontSize: '1.5em', fontWeight: 'bold', marginBottom: '10px' }}>Gêneros</h3>
        <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
          {Object.keys(livrosPorGenero).map((genero) => (
            <label key={genero} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <select
                  value={generoSelecionado}
                  onChange={(e) => handleGeneroChange(e.target.value)}
                  style={{
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #480c8d',
                    color: '#480c8d',
                    fontWeight: 'bold',
                    fontSize: '1em'
                  }}
                >
                  <option value="">Selecione um gênero</option>
                  {Object.keys(livrosPorGenero).map((genero) => (
                    <option key={genero} value={genero}>
                      {genero}
                    </option>
                  ))}
                </select>
              <span style={{ color: '#480c8d', fontWeight: 'bold' }}>{genero}</span>
            </label>
          ))}
        </div>

        
        {generoSelecionado && (
          <div>
            <h4 style={{ color: '#1eaeeb', fontSize: '1.3em', fontWeight: 'bold' }}>{generoSelecionado}</h4>
            <ul>
              {livrosPorGenero[generoSelecionado].map((livro, index) => (
                <li key={index} style={{ color: '#3F3F3F', padding: '8px 0', borderBottom: '1px solid #eaeaea' }}>{livro}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
