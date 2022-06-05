import Dashboard from './pages/Dashboard/';
import InitialPage from './pages/InitialPage/';
import Login from './pages/Login/index';
import TelaInicialCadastro from './pages/Cadastro/TelaInicialCadastro';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from './pages/Cadastro/Form';
import { AuthProvider } from './context/Auth';

import './App.css';
import MyApp from './pages/Suporte/_app.tsx';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={ <InitialPage/> } />
            <Route path="/dashboard" element={ <Dashboard/> } />
            <Route path="/login" element={ <Login/> } />
            <Route path="/cadastro" element={ <TelaInicialCadastro/> } />
            <Route path="/suporte" element={ <MyApp /> } />
            <Route path="/formulario" element={ <Form/> } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}
export default App;