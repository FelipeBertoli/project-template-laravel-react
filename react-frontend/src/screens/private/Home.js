import React from 'react';
import { useNavigate } from 'react-router-dom';
import {  logoutInvoker } from '../../utils/services/AuthService';

export default function HomePrivate() {
  const navigate = useNavigate();

  async function handleLogout() {
      await logoutInvoker();
      navigate(0);
  }

  return (
    <div style={{paddingLeft:10}}>
      <h1>Bem-vindo</h1>
      <p>Você está logado.</p>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}
