'use client'

import { useEffect, useState } from 'react';

export function Navegador() {
  const [activeRoute, setActiveRoute] = useState('');

  useEffect(() => {
    const currentPath = window.location.pathname.split('/').pop();
    setActiveRoute(currentPath);
  }, []);

  const isActive = (route) => activeRoute === route ? { background: '#E8F6FF', fontWeight: '550' } : {};

  return (
    <aside style={{ display: 'flex', width: '6%', flexDirection: 'column', padding: '10px', alignItems: 'center', background:'#2596be' }}>
      <div id="logo" style={{ alignSelf: 'center' }}>
        <img src="logo.png" alt="Logo" style={{ width: '80px', height: '80px' }} />
      </div>

      <nav style={{ flex: 1, alignContent: 'center', textAlign: 'center' }}>
        <a href="biblioteca" style={{ textDecoration: 'none', color: '#FFFFFF' }}>
          <div style={{ margin: '0px', padding: '20px 16px', ...isActive('biblioteca') }}>
            Biblioteca
          </div>
        </a>

        <a href="leitura" style={{ textDecoration: 'none', color: '#FFFFFF' }}>
          <div style={{ margin: '0px', padding: '20px 16px', ...isActive('leitura') }}>
            Leitura
          </div>
        </a>

        <a href="ranking" style={{ textDecoration: 'none', color: '#FFFFFF' }}>
          <div style={{ margin: '0px', padding: '20px 16px', ...isActive('ranking') }}>
            Ranks
          </div>
        </a>

        <a href="perfil" style={{ textDecoration: 'none', color: '#FFFFFF' }}>
          <div style={{ margin: '0px', padding: '20px 16px', ...isActive('perfil') }}>
            Perfil
          </div>
        </a>
      </nav>

      <div id="menu-inferior" style={{ marginTop: 'auto', marginBottom: '20px', textAlign: 'center' }}>
        <button style={{ background: "none", border: 'none', marginBottom: '8px' }} onClick={() => { window.location.href = 'login' }}>
          <img src="logout.svg" alt="sair" style={{ width: '40px', height: '40px' }} />
        </button>

        <button style={{ background: "none", border: 'none' }} onClick={() => { window.location.href = 'login' }}>
          <img src="config.svg" alt="configurações" style={{ width: '42px', height: '42px' }} />
        </button>
      </div>
    </aside>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="bg-fundo">
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
          <Navegador />
          <main style={{ flex: 1, display: 'flex', flexDirection: 'row', background:'#E8F6FF',color:'#3F3F3F' }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
