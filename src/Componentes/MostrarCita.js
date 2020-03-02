import React from 'react';

const MostrarCita = ({cita, index, eliminarCita}) => {

    const eliminar = () => {
        eliminarCita(index)
    }

    return (
        <div className = 'cita'>
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Dueño: <span>{cita.propietario}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Síntomas: <span>{cita.sintomas}</span></p>
            <button 
                type='button' 
                className= 'button eliminar u-full-width'
                onClick= {eliminar}>   
                Eliminar Cita                            
            </button>
        </div>
    );
};

export default MostrarCita;