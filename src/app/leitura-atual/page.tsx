"use client";
import React from 'react';


export default function Leituras() {
  // Simulando leituras disponíveis (você pode substituir por dados reais futuramente)
  const leituras = [
    { id: 1, titulo: "Aventura na Floresta", descricao: "Descubra os mistérios escondidos na floresta encantada." },
    { id: 2, titulo: "O Pequeno Astronauta", descricao: "Uma viagem pelo espaço com muitas surpresas!" },
    { id: 3, titulo: "O Segredo do Castelo", descricao: "Uma história cheia de mistérios em um castelo antigo." },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: '#480c8d', fontSize: '2em', fontWeight: 'bold', textAlign: 'center' }}>
        Leituras Disponíveis
      </h1>
      <p style={{ color: '#3F3F3F', textAlign: 'center', marginBottom: '40px' }}>
        Escolha uma leitura para começar sua jornada de aventuras!
      </p>

      {/* Listando as leituras */}
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {leituras.map((leitura) => (
          <div key={leitura.id} style={{ 
            backgroundColor: '#ffffff', 
            border: `2px solid #1eaeeb`, 
            borderRadius: '10px', 
            padding: '20px', 
            margin: '10px', 
            width: '250px', 
            textAlign: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{ color: '#480c8d' }}>{leitura.titulo}</h2>
            <p style={{ color: '#3F3F3F' }}>{leitura.descricao}</p>
            <button style={{
              backgroundColor: '#1eaeeb',
              color: '#ffffff',
              padding: '10px',
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
  );
}
