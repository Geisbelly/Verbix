"use client";
import React from 'react';


export default function Page() {
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

        <nav style={{ flex: 1, alignContent: 'center', textAlign: 'center'}}>
          
          <a href="biblioteca" style={{textDecoration:'None', color:'#FFFFFF'}}>
            <div style={{ margin: '0px',padding: '20px 16px' }}>
              Biblioteca
            </div>
          </a>

          <a href="leitura" style={{textDecoration:'None', color:'#FFFFFF'}}>
            <div style={{ margin: '0px', padding: '20px 16px' }}>
              Leitura
            </div>
          </a>

          <a href="ranking" style={{textDecoration:'None', color:'#FFFFFF'}}>
            <div style={{ margin: '0px', padding: '20px 16px' }}>
              Ranks
            </div>
          </a>

          <a href="perfil" style={{textDecoration:'None', color:'#2596be',fontWeight:'550'}}>
            <div style={{ margin: '0px',padding: '20px 16px', background:'#E8F6FF'}}>
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
        
        <div style={{ display: 'flex', flex: 1, gap: '0px' }}>

          <section id="perfil" style={{ width: '35%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '50px', borderRight:'2.5px solid #E1E3E5'  }}>
            
            <div style={{ textAlign: 'center' }}>
              
              <img src="/foto.png" alt="Foto do Perfil" style={{ marginBottom:'5px',width: '180px', height: '180px', borderRadius: '100%', border: '7px solid #2596be' }} />
              
              <h3 style={{marginBottom:'3px',marginTop:'5px'}}>João da Silva</h3>
              <h4 style={{marginTop:'2px', marginBottom:'8px', color:'#8E9192'}}>@joaosilva</h4>
            
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', padding: '20px', textAlign: 'center' }}>
              
              <div style={{maxWidth:'82px', minHeight:'50px'}}>
                <p style={{marginBottom:'3px',marginTop:'8px',fontSize:'15px', fontWeight:'550'}}>Livros lidos</p>
                <p style={{marginTop:'5px', fontSize:'15px'}}>12</p>
              </div>
              
              <div style={{maxWidth:'82px', minHeight:'50px'}}>
                <p style={{marginBottom:'3px',marginTop:'8px',fontSize:'15px', fontWeight:'550'}}>Páginas lidas</p>
                <p style={{marginTop:'5px', fontSize:'15px'}}>1502</p>
              </div>
              
              <div style={{maxWidth:'82px', minHeight:'50px'}}>
                <p style={{marginBottom:'3px',marginTop:'8px', fontSize:'15px', fontWeight:'550'}}>Missões concluídas</p>
                <p style={{marginTop:'5px', fontSize:'15px'}}>5</p>
              </div>
              
            </div>
          </section>

          <section id="conquistas" style={{ width: '65%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '30px' }}>
            
            <h3 style={{marginBottom:'3px'}}>• CONQUISTA •</h3>
              
              <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', padding: '20px',marginTop:'3px'  }}>
              
                <div style={{ textAlign: 'center'}}>
                  <img src="conquista.jfif" alt="Conquista 1" style={{ width: '145px', height: '145px', borderRadius:'10px', marginBottom:'5px' }} />
                  <h4 style={{marginTop:'5px'}}>Conquista 1</h4>
                </div>
                
                <div style={{ textAlign: 'center' }}>
                  <img src="conquista.jfif" alt="Conquista 2" style={{ width: '145px', height: '145px', borderRadius:'10px', marginBottom:'5px' }} />
                  <h4 style={{marginTop:'5px'}}>Conquista 2</h4>
                </div>
                
                <div style={{ textAlign: 'center' }}>
                  <img src="conquista.jfif" alt="Conquista 3" style={{ width: '145px', height: '145px', borderRadius:'10px', marginBottom:'5px' }} />
                  <h4 style={{marginTop:'5px'}}>Conquista 3</h4>
                </div>
              
              </div>

            <h3 style={{marginBottom:'3px'}}>• MISSÃO DO MÊS •</h3>

              <div  style={{marginTop:'3px'}}>
                
                <div id="progresso-paginas">
                  <h4 style={{marginBottom:'5px'}}>Páginas</h4>
                  <progress id="barra-progresso" value="46" max="100" style={{ width: '450px', height: '32px' }}></progress>
                </div>
                
                <div id="progresso-livros">
                  <h4 style={{marginBottom:'5px'}}>Livros</h4>
                  <progress id="barra-progresso" value="2" max="5" style={{ width: '450px', height: '32px' }}></progress>
                </div>
              
              </div>
          </section>
        </div>
      </main>
    </div>
  );
}
