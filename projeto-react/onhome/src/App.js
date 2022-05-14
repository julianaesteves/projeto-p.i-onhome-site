import Dashboard from './pages/Dashboard/';
import InitialPage from './pages/InitialPage/';
import Login from './pages/Login/index';
import TelaInicialCadastro from './pages/Cadastro/TelaInicialCadastro';
import Suporte from './pages/Suporte/'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={ <InitialPage/> } />
          <Route path="/dashboard" element={ <Dashboard/> } />
          <Route path="/login" element={ <Login/> } />
          <Route path="/cadastro" element={ <TelaInicialCadastro/> } />
          <Route path="/suporte" element={ <Suporte/> } />
        </Routes>
      </div>
    </Router>
  );
}
export default App;