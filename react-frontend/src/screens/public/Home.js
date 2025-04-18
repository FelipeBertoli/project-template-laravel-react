import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../utils/services/AuthService';
import { ButtonFormGroup, InputFormGroup, Link, MainButton, PageContainer, PageForm, PageMain, TextInput } from '../../components/ComponentsModule';

export default function HomePublic() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState();
  const navigate = useNavigate();

  async function handleLogin() {
    await login({ email, password });
    navigate(0);
  }

  return (
    <PageMain>
      <PageContainer>
        
        <PageForm title="Login">
          <InputFormGroup>
            <TextInput label="E-mail" type="email" value={email} placeholder={"Digite seu e-mail"} onChange={(e) => setEmail(e.target.value)} message={message} required />
            <TextInput label="Senha" type="password" value={password} placeholder={"Digite sua senha"} onChange={(e) => setPassword(e.target.value)} message={message} required />
            <Link href="/" message='Texto'>Esqueceu sua senha?</Link>
          </InputFormGroup>
          <ButtonFormGroup>
            <MainButton label="Entrar" onClick={handleLogin} />
            <MainButton label="Cadastrar-se" onClick={handleLogin} type="text" color="secondary" />
          </ButtonFormGroup>
        </PageForm>
      </PageContainer>

    </PageMain>

  );
}
