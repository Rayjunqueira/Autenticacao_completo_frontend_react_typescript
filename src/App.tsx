import { Route, Routes } from 'react-router-dom';
import './App.css';
import Activate from './pages/Activate';
import ForgotPassword from './pages/ForgotPassword';

import Login from './pages/Login';
import Private from './pages/Private';
import Register from './pages/Register';
import { RequireAuth } from './contexts/RequireAuth';

function App() {
  return (
    <Routes>        
      <Route path='/login' element={<Login />}/>
      <Route path='/cadastrar' element={<Register />}/>
      <Route path='/ativar' element={<Activate />}/>
      <Route path='/esquecisenha' element={<ForgotPassword />}/>
      <Route path='/' element={<RequireAuth><Private /></RequireAuth>}/>
    </Routes>
  );
}
 
export default App;
