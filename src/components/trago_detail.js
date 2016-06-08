import React from 'react';

const TragoDetail = ({trago})=> {
    return (
        <li className="list-group-item">
        <div>
            <div className={trago.estilo}>
                <div>Codigo : {trago.codigo}</div>
                <div>Mensaje : {trago.mensaje}</div>
                <div>Fecha : {trago.fechaHora}</div>
            </div>
        </div>
      </li> 
    );
}

export default TragoDetail;