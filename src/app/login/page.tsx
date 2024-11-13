'use client';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const direcionar = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Previne o envio do formulário padrão
    router.push('/'); // Redireciona para a página inicial
  };

  return (
    <div style={{ display: 'flex', height: '100vh', margin: '0', padding: '0',  background:'var(--background)', color:'var(--text)'}}>
      
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

      <div style={{ flex: 1, display:'flex', alignItems:'center', justifyContent:'center' }}>
        <div style={{ maxWidth: '400px', width: '100%', padding: '20px', alignContent:'center', borderRadius:'5px' }}>
          <h1 style={{ textAlign: 'center', marginBottom:'4px' }}>Login</h1>
          <p style={{ textAlign: 'center', marginTop:'4px' }}>Bem-vindo(a) de volta</p>

          <form >
            <div style={{ marginBottom: '15px', alignItems:'center' }}>
              <input type="email" id="email" name="email" placeholder="Seu email" style={{ width: '95%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', alignItems:'center' }} required />
            </div>

            <div style={{ marginBottom: '10px' }}>
              <input type="password" id="password" name="password" placeholder="Sua senha" style={{ width: '95%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} required />
            </div>

            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent:'space-between' }}>
              <div style={{ justifyContent:'center' }}>
                <input type="checkbox" id="remember-me" name="remember-me" style={{ marginRight: '10px', transform: 'scale(1)' }} />
                <label htmlFor="remember-me" style={{ fontSize:'15px' }}>Lembre-se de mim</label>
              </div>
              <a href="/recuperacaoSenha" style={{ color: '#2596be', textDecoration: 'none', fontSize:'15px' }}>Esqueci minha senha</a>
            </div>

            <button onClick={direcionar} type="submit" style={{ width: '100%', padding: '10px', backgroundColor: 'var(--primary)', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize:'16px', fontWeight:'600' }}>Entrar</button>
          </form>

          <p style={{ textAlign: 'center', marginTop: '30px', fontSize:'14px' }}>
            Não tem uma conta? <a href="/cadastro" style={{ color: '#2596be', textDecoration: 'none' }}>Cadastre-se</a>
          </p>
        </div>
      </div>
      
      <div style={{ flex: 1, display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--secondary)', borderBottomLeftRadius:'100px', borderTopLeftRadius:'100px' }}>
        <h1 style={{ color:'#fff', marginBottom:'3px' }}>Hello, amigo!</h1>
        <p style={{ color:'#fff', marginBottom:'3px', marginTop:'5px' }}>Ficamos felizes em tê-lo(a) aqui conosco novamente!</p>
        <img src="logo.png" alt="Logo" style={{ width: '400px', height: '400px' }} />
      </div>
    </div>
  );
}
