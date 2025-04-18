import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  logout } from '../../utils/services/AuthService';

export default function HomePrivate() {
  const navigate = useNavigate();

  async function handleLogout() {
      await logout();
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
