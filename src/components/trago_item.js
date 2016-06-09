import React from 'react'

const TragoItem = ({trago})=> {

    if(!trago){
        return (
            <div>
                Cargando ..
            </div>
        );
    }

    return (
        <div className="list-group-item">
            <div className={trago.estilo}>
                <div>Codigo : {trago.codigo}</div>
                <div>Mensaje : {trago.mensaje}</div>
                <div>Fecha : {trago.fechaHora}</div>
            </div>
        </div>
    );
}

export default TragoItem;