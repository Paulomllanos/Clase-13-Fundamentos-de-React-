import './App.css';
import Bienvenida from './components/bienvenida/bienvenida';
import Reloj from './components/Reloj/reloj';
import Card from './components/usoProps/card/card';
import {useState} from 'react'
import Aplicador from './components/ejercicio grupal/Aplicador/Aplicador';
import Bienvenida2 from './components/Clase(component)/c-clase';
import Clock from './components/Hra Actual/hrActual';





function App() {

  // const name1 = 'Paulo Maldonado';
  // const name2 = 'Jose Sepulveda';
  // const name3 = 'Mariana Osorio';
  // const profesion1 = 'Ingeniero en minas';
  // const profesion2 = 'Ingeniero en informatica';
  // const profesion3 = 'Ingeniero electrico';

  // let totalDeLlamadas = 0;

  const [totalDeLlamadas, setTotalDeLlamadas] = useState(0);
  
  const profesionales = [
    {
      id: 1,
      nombre: 'Paulo Maldonado',
      profesion: 'Ingeniero en Minas'
    },
    {
      id: 2,
      nombre: 'Jose Sepulveda',
      profesion: 'Ingeniero en informatica'
    },
    {
      id: 3,
      nombre: 'Mariana Osorio',
      profesion: 'Ingeniero electrico'
    },
  ]

  

  const aumentoLlamadas = () => {
    setTotalDeLlamadas(totalDeLlamadas + 1)
    console.log(totalDeLlamadas)
  }


  return (
    <div className="App">
      {/* <Bienvenida name='Paulo Maldonado Llanos'/>
      <Bienvenida name='Julio Martinez' /> */}
      <div>
        {profesionales.map(profesional => <Bienvenida datos={profesional} key={profesional.id}/>)}
      </div>
      <Reloj />
      <div className='container'>
        {profesionales.map(profesional => <Card datos={profesional} key={profesional.id} aumento={aumentoLlamadas}/>)}
      </div>
      <p>{`Llamadas realizadas: ${totalDeLlamadas}`}</p>
      <Aplicador />
      <h3>{totalDeLlamadas > 10 ? 'Tienes mas de 10 llamadas' : 'Llamadas insuficientes'}</h3>
      {profesionales.map(profesional => <Bienvenida2 name={profesional.nombre} key={profesional.id} />)}
      <Clock />
    </div>
  );
}

export default App;
