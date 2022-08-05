import React from 'react';
import Card from './Card'
import '../Styles/Card.css'
import DashBoard from './DashBoardPowerbi';
import { useState, useEffect } from 'react'



function GroupCards() {

    const UrlInicial = "https://localhost:44395/api/DashBoard"
    const [state, setstate] = useState([]);

    const Fetching = async () => {
        const response = await fetch(UrlInicial)
        const data = await response.json()
        setstate(data)
    }

    useEffect(() => {
        Fetching()
    }, []);
    return (
        <div>
            <h1 className="display-4">Dinamicas de venta</h1>
            <div className='container' >
                <div className='row'>
                    {
                        state.map(CantidadCards => (
                            <div className='col-12 col-md-6 col-lg-4' key={CantidadCards.id}>
                                <Card title={CantidadCards.Nombre} URL={CantidadCards.UrlDashBoardPBI} image={CantidadCards.ImagenUrl} descrip={CantidadCards.Descripcion} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    );
}

export default GroupCards;
