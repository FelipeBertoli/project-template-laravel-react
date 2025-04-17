import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../utils/services/AuthService';
import { AddInput, DateSelector, Dropdown, Link, MainButton, PageContainer, PageMain, RadioGroup, TextInput, ThemeToggle } from '../../../components/ComponentsModule';

export default function HomePublic() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState();
  const navigate = useNavigate();
  const [radioValue, setRadioValue] = useState(1);

  async function handleLogin() {
    await login({ email, password });
    navigate(0);
  }

  function handleRadioChange(event) {
    setRadioValue(event.target.value);
  }


  return (
    <PageMain>
      <PageContainer>

        <div className="input-form-group">
          <TextInput label="E-mail" type="email" value={email} placeholder={"Digite seu e-mail"} onChange={(e) => setEmail(e.target.value)} message={message} required />
          <TextInput label="Senha" type="password" value={password} placeholder={"Digite sua senha"} onChange={(e) => setPassword(e.target.value)} message={message} required />
        </div>
        <Link href="/" message='Texto'>Link</Link>
        <div className="button-form-group">
        <MainButton label="Primário" onClick={handleLogin}/>
          <MainButton label="Secundário" onClick={handleLogin} color="secondary" />
          <DateSelector />
          <Dropdown label="Dropdown" options={[
            { value: 1, label: "Opção 1" },
            { value: 2, label: "Opção 2" }
          ]} />
          <RadioGroup label="Dropdown" options={[
            { value: 1, label: "Opção 1" },
            { value: 2, label: "Opção 2" }
          ]} />
          <AddInput/>
          <ThemeToggle />
        </div>
      </PageContainer>

    </PageMain>

  );
}
