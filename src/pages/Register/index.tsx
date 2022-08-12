import * as C from './styles';

import logo from '../../images/logo.png';
import { useNavigate } from 'react-router-dom';
import ButtonComponent from '../../components/ButtonComponent';
import { useState } from 'react';
import { useApi } from '../../hooks/useApi';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useForm } from 'react-hook-form';

interface IFormInputs {
  username: string
  email: string
  password: string
  confirmPassword: string
  key: string;
}

const schema = yup.object({
    username: yup.string().required('É necessário informar um usuário'),
    email: yup.string().email('Email deve ser válido').required('email é necessário'),
    key: yup.string().required('Chave é necessário'),
    password: yup.string().min(7, "Sua senha deve ter no mínimo 7 caractéres.").required(),
    confirmPassword: yup.string().required('É necessário confirmar a senha').oneOf([yup.ref("password")],"Senhas devem ser idênticas"),
  }).required();

const Register = () => {
  const api = useApi();
  const navigate = useNavigate();
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [key, setKey] = useState('');

  const registerNavigate = () => {
    navigate('/');
  }

  const handleRegister = async () => {
    if (username && email && password && key) {
      const register = await api.signup(username, email, password);
      if (register) {
        console.log(username);
        console.log(email);
        console.log(password);
        console.log(key);
      } else {
        alert('Erro')
      }
    }
  }

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <C.Container>
      <C.Form onSubmit={handleSubmit(onSubmit)}>
        <C.Square>
          <C.LogoContainer>
            <img src={logo} alt="" />
          </C.LogoContainer>
          <C.Title>Digite um nome de usuário</C.Title>
            <input 
              placeholder='Usuário...' 
              type='text'
              value={username}
              {...register("username")}
              onChange={e => setUsername(e.target.value)}
            />
            <p id='error' >{errors.username?.message}</p>
          <C.Title>Digite um e-mail válido</C.Title>
            <input 
              placeholder='E-mail...' 
              type='email'
              value={email}
              {...register("email")}
              onChange={e => setEmail(e.target.value)}
            />
            <p id='error' >{errors.email?.message}</p>
          <C.Title>Digite a sua senha</C.Title>
            <input 
              placeholder='Senha...' 
              type='password'
              value={password}
              {...register("password")}
              onChange={e => setPassword(e.target.value)}
            />
            <p id='error' >{errors.password?.message}</p>
          <C.Title>Confirme a sua senha</C.Title>
            <input 
              placeholder='Senha...' 
              type='password'
              {...register("confirmPassword")}
            />
          <p id='error'>{errors.confirmPassword?.message}</p>
            <C.ButtonContainer>
              <ButtonComponent
                text='Enviar'
                type='submit'
                onClick={handleRegister}
              />
            </C.ButtonContainer>
            <C.RegisterLink onClick={registerNavigate}>
              Logar agora
            </C.RegisterLink>
        </C.Square>
      </C.Form>
    </C.Container>
  )
}

export default Register