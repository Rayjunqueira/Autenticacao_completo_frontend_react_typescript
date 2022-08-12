import { useNavigate } from 'react-router-dom';
import ButtonComponent from '../../components/ButtonComponent';
import * as C from './styles';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useApi } from '../../hooks/useApi';

interface IFormInputs {
  email: string
}

const schema = yup.object({
    email: yup.string().email('Email deve ser válido').required('email é necessário'),
  }).required();


const ForgotPassword = () => {
    const navigate = useNavigate();
    const api = useApi()

    const [email, setEmail] = useState<string>('');
    const [confirm, setConfirm] = useState<boolean>(false);
  
    const handleForgetpass = async () => {
        if (email) {
            const forgetPass = await api.forgetPass(email);
            if (forgetPass) {
                setConfirm(true);
            }
        }
    }

    const handleHome = () => {
        navigate('/')
    };

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
      resolver: yupResolver(schema)
    });
  
    const onSubmit = (data: IFormInputs) => {
        if (confirm === true) {
            console.log('ok')
        }
    }   

  return (
   <C.Container>
          <C.Form onSubmit={handleSubmit(onSubmit)} >
        <C.Square>
          <C.Title>E-mail cadastrado</C.Title>
            <input
              placeholder='Email...'
              type='email'
              value={email}
              {...register("email")}
              onChange={e => setEmail(e.target.value)}
            />
            <p id='error' >{errors.email?.message}</p>
          <C.ButtonContainer>
            <ButtonComponent 
                text='Enviar'
                type='submit'
                onClick={handleForgetpass}
              />
          </C.ButtonContainer>
          <C.RegisterLink onClick={handleHome}>
            Voltar para principal
          </C.RegisterLink>
        </C.Square>
      </C.Form>
   </C.Container>
  )
}

export default ForgotPassword