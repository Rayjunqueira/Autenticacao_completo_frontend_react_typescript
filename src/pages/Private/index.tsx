import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonComponent from '../../components/ButtonComponent';
import { AuthContext } from '../../contexts/AuthContext';

import * as C from './styles';

const Private = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    const logout = auth.signout();
    return logout
  }

  return (
    <C.Container>
        <ButtonComponent
          text='Sair'
          type='submit'
          onClick={handleLogout}
        />
    </C.Container>
  )
}

export default Private