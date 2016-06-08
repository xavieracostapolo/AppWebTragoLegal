import React from 'react';

import TragoDetail from './trago_detail'

const TragoList = ({tragos})=> {

    if (!tragos) {
        return (
            <div>Loading ...</div>
        );
    }

    const tragoItems = tragos.map((trago)=>{
        return (
            <TragoDetail 
                key={trago.id}
                trago={trago}
            />
        );
    });

    return (
        <div>
            <ul className="col-md-8 list-group">
                {tragoItems}
            </ul> 
        </div>
    );
}

export default TragoList;