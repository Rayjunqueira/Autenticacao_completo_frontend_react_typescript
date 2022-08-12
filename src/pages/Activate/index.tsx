import * as C from './styles';
import { useNavigate } from 'react-router-dom';
import ButtonComponent from '../../components/ButtonComponent';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useForm } from 'react-hook-form';
import { useApi } from '../../hooks/useApi';
import { useState } from 'react';

interface IFormInputs {
  email: string
  token: string
}

const schema = yup.object({
    email: yup.string().email('Email deve ser válido').required('Email é necessário'),
    token: yup.string().required('Token é necessário'),
  }).required();

const Activate = () => {
  const api = useApi();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const [confirm, setConfirm] = useState<boolean>(false);

  const homeNavegation = () => {
    navigate('/')
  }

  const handleActivate = async () => {
    const activate = await api.activate(email, token);
    if (activate) {
      setConfirm(true);
    }
  }

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: IFormInputs) => {
    if (confirm === true ) {
      console.log('ok')
    }
  };

  return (
    <C.Container>
      <C.Form onSubmit={handleSubmit(onSubmit)}>
        <C.Square>
          <C.Title>E-mail do cadastro</C.Title>
            <input
              placeholder='Email...'
              type='text'
              value={email}
              {...register("email")}
              onChange={e => setEmail(e.target.value)}
            />
            <p id='error' >{errors.email?.message}</p>
          <C.Title>Digite o seu token de ativação</C.Title>
            <textarea 
              placeholder='Token...'
              value={token}
              {...register("token")}
              onChange={e => setToken(e.target.value)}
            />
            <p id='error' >{errors.token?.message}</p>
          <C.ButtonContainer>
            <ButtonComponent 
              text='Enviar'
              type='submit'
              onClick={handleActivate}
            />
          </C.ButtonContainer>
          <C.RegisterLink onClick={homeNavegation}>
            Voltar para principal
          </C.RegisterLink>
        </C.Square>
      </C.Form>
    </C.Container>
  )
}

export default Activate