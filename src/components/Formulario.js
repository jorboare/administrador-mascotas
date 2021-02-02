import React, { useState } from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types'


const Formulario = ({ crearCita }) => {

    // State de Citas
    const [appointment, setAppointment] = useState({
        mascota: "",
        propietario: "",
        fecha: "",
        hora: "",
        sintomas: ""
    })

    const handleChange = e => {
        setAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        })
    }

    //State Error Handler

    const [error, setError] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        //Validar
        if (mascota.trim() === "" || propietario.trim() === "" || fecha.trim() === "" || hora.trim() === "" || sintomas.trim() === "") {
            setError(true)
            return
        }

        //Eliminar mensaje previo
        setError(false)


        //Asignar ID
        appointment.id = uuid()

        //Crear cita
        crearCita(appointment)

        //Reiniciar el form
        setAppointment({
            mascota: "",
            propietario: "",
            fecha: "",
            hora: "",
            sintomas: ""
        })
    }
    //Extrar los valores

    const { mascota, propietario, fecha, hora, sintomas } = appointment

    return (
        <>
            <h2>Crear Cita</h2>

            {error && <p className="alerta-error">Todos los campos son obligatorios</p>}

            <form onSubmit={handleSubmit}>
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre mascota"
                    onChange={handleChange}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre dueño de la mascota"
                    onChange={handleChange}
                    value={propietario}

                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}

                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}

                />
                <label>Síntomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={handleChange}
                    value={sintomas}

                />
                <button
                    type="submit"
                    className="u-full-width button-primary">Agregar cita</button>

            </form>
        </>
    );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}
export default Formulario;