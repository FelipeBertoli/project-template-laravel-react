import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../utils/services/AuthService';
import { ButtonFormGroup, InputFormGroup, MainButton, PageContainer, PageForm, PageMain, TextInput, TextLink, ThemeToggle } from '../../components/ComponentsModule';

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
            <TextLink link="/" message='Texto'>Esqueceu sua senha?</TextLink>
          </InputFormGroup>
          <ButtonFormGroup>
            <MainButton label="Entrar" action={handleLogin} />
            <MainButton label="Cadastrar-se" action={handleLogin} type="text" />
          </ButtonFormGroup>
        </PageForm>
        <ThemeToggle/>
      </PageContainer>

    </PageMain>

  );
}
