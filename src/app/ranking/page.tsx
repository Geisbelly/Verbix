"use client";
export default function RankingPage() {
    // Dados fictícios para o ranking
    const ranking = [
      { posicao: 1, nome: "Jogador A", pontos: 150 },
      { posicao: 2, nome: "Jogador B", pontos: 130 },
      { posicao: 3, nome: "Jogador C", pontos: 120 },
      { posicao: 4, nome: "Jogador D", pontos: 100 },
      { posicao: 5, nome: "Jogador E", pontos: 90 },
    ];
  
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
            <img src="logo.png" alt="Logo" style={{ width: '80px', height: '80px' }} />
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
  
            <button style={{background:"None", border:'None', marginBottom:'8px'}} onClick={() => { window.location.href = 'login' }}>
              <img src="logout.svg" alt="sair" style={{ width: '40px', height: '40px' }}  />
            </button>
  
            <button style={{background:"None", border:'None'}} onClick={() => { window.location.href = 'login' }}>
              <img src="config.svg" alt="configurações" style={{ width: '42px', height: '42px' }}  />
            </button>
  
          </div>
        </aside>
  
  
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', background:'#E8F6FF',color:'#3F3F3F' }}>
          
          <div style={{ display: 'flex',flexDirection: 'column', flex: 1, gap: '0px' }}>
  
              <h1>Ranking do App</h1>
              <ul>
                {ranking.map((jogador) => (
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