import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita'

function App() {


  //Citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))

  if (!citasIniciales) {
    citasIniciales = []
  }

  //Todas las citas
  const [allAppointments, setAllAppointments] = useState(citasIniciales)

  //Use Effect para realizar ciertas operaciones cuando el state cambia

  useEffect(() => {

    let citasIniciales = JSON.parse(localStorage.getItem('citas'))

    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(allAppointments))
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [allAppointments])

  //Funcion crear citas

  const crearCita = cita => {
    setAllAppointments([
      ...allAppointments,
      cita
    ])
  }

  //Eliminar cita

  const eliminarCita = id => {

    const nuevasCitas = allAppointments.filter(elm => elm.id !== id)

    setAllAppointments(nuevasCitas)
  }

  const titulo = allAppointments.length === 0 ? "No hay citas" : "Administra tus citas"
  return (
    <Fragment>

      <h1>Administrador de Pacientes</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Formulario crearCita={crearCita} />
          </div>
          <div className='one-half column'>

            <h2>{titulo}</h2>
            {allAppointments.map(elm => <Cita key={elm.id} {...elm} eliminarCita={eliminarCita} />)}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
