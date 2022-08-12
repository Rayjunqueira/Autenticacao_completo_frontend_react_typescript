import * as C from './styles';

import { useNavigate } from 'react-router-dom';
import ButtonComponent from '../../components/ButtonComponent';
import logo from '../../images/logo.png'; //600px x 200px
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useForm } from 'react-hook-form';

interface IFormInputs {
  email: string
  password: string
}

const schema = yup.object({
    email: yup.string().email('Email deve ser válido').required('email é necessário'),
    password: yup.string().min(7, "Sua senha deve ter no mínimo 7 caractéres.").required('Senha deve ser preenchida'),
  }).required();


const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState<boolean>(false);
  
  const registerNavigate = () => {
    navigate('/cadastrar');
  }

  const forgotPasswordNavigate = () => {
    navigate('/esquecisenha')
  }

  const handleLogin = async () => {
    if (email && password) {
      const isLogged = await auth.signin(email, password);
      if (isLogged) {
        navigate('/')
        setConfirm(true);
      } else {
          alert("Não funcionou!");
      }
    }
  }

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: IFormInputs) => {
      if (confirm === true ) {
        console.log('ok')
      } else {
        console.log('ocorreu um erro')
      }
  }

  return (
    <C.Container>
      <C.Form onSubmit={handleSubmit(onSubmit)}>
        <C.Square>
          <C.LogoContainer>
            <img src={logo} alt="" />
          </C.LogoContainer>
          <C.Title>Digite o seu e-mail</C.Title>
            <input 
              placeholder='E-mail...'
              value={email}
              type='text'
              {...register("email")}
              onChange={e => setEmail(e.target.value)}
            />
            <p id='error' >{errors.email?.message}</p>
          <C.Title>Digite a sua senha</C.Title>
            <input
              placeholder='Senha...'
              value={password}
              type='password'
              {...register("password")}
              onChange={e => setPassword(e.target.value)}
            />
            <p id='error' >{errors.password?.message}</p>
          <C.ButtonContainer>
            <ButtonComponent 
              text='Enviar'
              type='submit'
              onClick={handleLogin}
            />
          </C.ButtonContainer>
          <C.NavigateContainer>
            <C.RegisterLink onClick={registerNavigate}>
              Cadastrar-se
            </C.RegisterLink>
          </C.NavigateContainer>
          <C.NavigateContainer>
            <C.RegisterLink onClick={forgotPasswordNavigate}>
              Esqueci a senha
            </C.RegisterLink>
          </C.NavigateContainer>
        </C.Square>
      </C.Form>
    </C.Container>
  )
}

export default Login