import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../utils/services/AuthService';
import { ActionButton, ButtonFormGroup, InputFormGroup, PageContainer, PageForm, PageMain, TextInput, TextLink, ThemeToggle } from '../../components/ComponentsModule';

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
    <PageForm title="Login">
      <InputFormGroup>
        <TextInput label="E-mail" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} errorText={message} required />
        <TextInput label="Senha" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} errorText={message} required />
        <TextLink link="/" message='Texto'>Esqueceu sua senha?</TextLink>
      </InputFormGroup>
      <ButtonFormGroup>
        <ActionButton label="Entrar" action={handleLogin} />
        <ActionButton label="Cadastrar-se" action={() => navigate('register')} variant="text" />
        <ThemeToggle />
      </ButtonFormGroup>
    </PageForm>
  );
}
