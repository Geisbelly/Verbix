import React from 'react';

export default function Page() {
  return (
    <div style={{ display: 'flex', height: '100vh', margin: '0', padding: '0' }}>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            overflow: hidden; e rolagem indesejadas */
            

          }
        `}
      </style>
      <aside style={{ display: 'flex', width: '5%', flexDirection: 'column', padding: '10px', alignItems: 'center', background:'#2596be' }}>
        <div id="logo" style={{ alignSelf: 'center' }}>
          <img src="logo.jpg" alt="Logo" style={{ width: '100px', height: '100px' }} />
        </div>

        <nav style={{ flex: 1, alignContent: 'center', textAlign: 'center' }}>
          <div style={{ margin: '0 10px', padding: '20px 10px' }}>
            <a href="biblioteca" style={{textDecoration:'None', color:'#FFFFFF'}}>Biblioteca</a>
          </div>
          <div style={{ margin: '0 10px', padding: '20px 10px' }}>
            <a href="leitura" style={{textDecoration:'None', color:'#FFFFFF'}}>Leitura</a>
          </div>
          <div style={{ margin: '0 10px', padding: '20px 10px' }}>
            <a href="ranking" style={{textDecoration:'None', color:'#FFFFFF'}}>Ranks</a>
          </div>
          <div style={{ margin: '0 10px', padding: '20px 10px', background:'#F5F5F5'}}>
            <a href="perfil" style={{textDecoration:'None', color:'#2596be'}}>Perfil</a>
          </div>
        </nav>

        <div id="menu-inferior" style={{ marginTop: 'auto', marginBottom: '20px', textAlign: 'center' }}>
          <button>Sair</button>
          <button>Config</button>
        </div>
      </aside>

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', background:'#F5F5F5' }}>
        <div style={{ display: 'flex', flex: 1, gap: '0px' }}>
          <section id="perfil" style={{ width: '35%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '30px', borderRight:'2.5px solid #2596be'  }}>
            <div style={{ textAlign: 'center' }}>
              <img src="/foto.jpeg" alt="Foto do Perfil" style={{ marginBottom:'5px',width: '180px', height: '180px', borderRadius: '100%', border: '5px solid #2596be' }} />
              <h2 style={{marginBottom:'3px',marginTop:'5px'}}>João da Silva</h2>
              <h4 style={{marginTop:'2px'}}>@joaosilva</h4>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', padding: '20px', textAlign: 'center' }}>
              <div>
                <h4 style={{marginBottom:'3px',marginTop:'12px'}}>Livros lidos</h4>
                <p style={{marginTop:'4px'}}>12</p>
              </div>
              <div>
                <h4 style={{marginBottom:'3px',marginTop:'12px'}}>Páginas lidas</h4>
                <p style={{marginTop:'4px'}}>1502</p>
              </div>
              <div>
                <h4 style={{marginBottom:'3px',marginTop:'12px'}}>Missões concluídas</h4>
                <p style={{marginTop:'4px'}}>5</p>
              </div>
            </div>
          </section>

          <section id="conquistas" style={{ width: '65%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '30px' }}>
            <h2>• CONQUISTA •</h2>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', padding: '20px' }}>
              <div style={{ textAlign: 'center' }}>
                <img src="conq1.jpg" alt="Conquista 1" style={{ width: '100px', height: '100px' }} />
                <h4>Conquista 1</h4>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src="conq2.jpg" alt="Conquista 2" style={{ width: '100px', height: '100px' }} />
                <h4>Conquista 2</h4>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src="conq3.jpg" alt="Conquista 3" style={{ width: '100px', height: '100px' }} />
                <h4>Conquista 3</h4>
              </div>
            </div>

            <h2>• MISSÃO DO MÊS •</h2>
            <div>
              <div id="progresso-paginas">
                <h4 style={{marginBottom:'5px'}}>Páginas</h4>
                <progress id="barra-progresso" value="46" max="100" style={{ width: '350px', height: '32px' }}></progress>
              </div>
              <div id="progresso-livros">
                <h4 style={{marginBottom:'5px'}}>Livros</h4>
                <progress id="barra-progresso" value="2" max="5" style={{ width: '350px', height: '32px' }}></progress>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
