import React from 'react';

export default function Page() {
  return (
    <div style={{ display: 'flex', height: '100vh', margin: '0', padding: '0',  background:'#F3F8FC',color:'#262626'}}>
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
      <div style={{ flex: 1,display:'flex',alignItems:'center', justifyContent:'center'}}>
      <div style={{ maxWidth: '400px', width: '100%', padding: '20px', alignContent:'center', borderRadius:'5px'}}>
          <h1 style={{ textAlign: 'center', marginBottom:'4px' }}>Login</h1>
          <p style={{ textAlign: 'center', marginTop:'4px' }}>Bem vindo(a) de volta</p>
          <form>
            <div style={{ marginBottom: '15px', alignItems:'center' }}>
             
              <input type="email" id="email" name="email" placeholder="Seu email" style={{ width: '95%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd',alignItems:'center'}} required />
            </div>
            <div style={{ marginBottom: '15px' }}>
             
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
      
      <div style={{ flex: 1, display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2596be', borderBottomLeftRadius:'100px',borderTopLeftRadius:'100px' }}>
        <h1 style={{color:'#fff', marginBottom:'3px'}}>Hello, amigo!</h1>
        <p style={{color:'#fff', marginBottom:'3px',marginTop:'5px'}}>Ficamos felizes em te-lo(a) aqui conosco novamente!</p>
        <img src="logo.png" alt="Logo" style={{ width: '400px', height: '400px' }} />
      </div>
    </div>
  );
}
