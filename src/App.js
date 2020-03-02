import React, {useState, useEffect} from 'react';
import Formulario from './Componentes/Formulario'
import MostrarCita from './Componentes/MostrarCita'

const App = () => {

  let citasGuardadas = JSON.parse(localStorage.getItem('citas'))

  if (!citasGuardadas)
    citasGuardadas = []

  const [citas, guardarCitas] = useState(citasGuardadas)

  const agregarCita = cita => {
    const nuevaCita = [...citas, cita]
    guardarCitas(nuevaCita)
  }

  const eliminarCita = index => {
    let copiaState = [...citas]
    copiaState.splice(index, 1)
    guardarCitas(copiaState)
  }

  const titulo = citas.length === 0 ? 
    "No hay Citas":
    'Administrar las citas aquí'

  useEffect(() => {
    localStorage.setItem('citas',JSON.stringify(citas))
  }, [citas])

  return (
    <div>
      <h1>Administrador de Pacientes</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Formulario
              nuevaCita = {agregarCita}
            />
          </div>
          <div className='one-half column'>
            <h2>{titulo}</h2>
            {citas.map((cita, index) => {
              return( 
                <MostrarCita 
                  key = {index}
                  index = {index}
                  cita = {cita}
                  eliminarCita = {eliminarCita}
                />
            )})}            
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

