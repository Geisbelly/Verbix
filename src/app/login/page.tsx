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
      <div style={{ flex: 1,display:'flex',alignItems:'center', justifyContent:'center', textAlign:'center', background:'#F3F8FC'}}>
      <img src="logo.png" alt="Logo" style={{ width: '400px', height: '400px' }} />
      </div>
      
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2596be' }}>
        <div style={{ maxWidth: '400px', width: '100%', height:'380px', padding: '20px', backgroundColor: '#fff', alignContent:'center', borderRadius:'5px'}}>
          <h2 style={{ textAlign: 'center', marginBottom:'4px' }}>Login</h2>
          <p style={{ textAlign: 'center', marginTop:'4px' }}>Bem vindo(a) de volta</p>
          <form>
            <div style={{ marginBottom: '15px', alignItems:'center' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
              <input type="email" id="email" name="email" placeholder="Seu email" style={{ width: '95%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd',alignItems:'center'}} required />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Senha</label>
              <input type="password" id="password" name="password" placeholder="Sua senha" style={{ width: '95%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} required />
            </div>
            <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" id="remember-me" name="remember-me" style={{ marginRight: '10px' }} />
              <label htmlFor="remember-me">Lembre-se de mim</label>
            </div>
            <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#2596be', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Entrar</button>
          </form>
          <p style={{ textAlign: 'center', marginTop: '30px' }}>
            Não tem uma conta? <a href="/cadastro" style={{ color: '#2596be', textDecoration: 'none' }}>Cadastrar</a>
          </p>
        </div>
      </div>
    </div>
  );
}
