import React from 'react';


const Cita = ({ fecha, hora, mascota, propietario, sintomas, id, eliminarCita }) => (
    <div className="cita">
        <p>Mascota: <span>{mascota}</span></p>
        <p>Dueño: <span>{propietario}</span></p>
        <p>Fecha: <span>{fecha}</span></p>
        <p>Hora: <span>{hora}</span></p>
        <p>Sintomas: <span>{sintomas}</span></p>
        <button
            className="button eliminar u-full-width"
            onClick={() => eliminarCita(id)}
        >Eliminar</button>
    </div>
)



export default Cita