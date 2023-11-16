import logo from './logo.svg';
import './App.css';
import C01componente from './componentes/C01componente';
import C02contador from './componentes/C02contador';
import Variables from './componentes/C04variables';
import CO6matriz from './componentes/CO6matriz';
import C05operador from './componentes/C05operador';
import C07matrizOperaciones from './componentes/C07matrizOperaciones';

function App() {
  return (
    <div>
     <C01componente/>
     <C02contador/>
     <Variables xVariable = "HOLA MUNDO Soy Johana '*'"/>
     <CO6matriz/>
     <C05operador/>
     <C07matrizOperaciones/>
    </div>
  );
}

export default App;
