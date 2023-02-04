import React from 'react'
import { useEffect } from 'react';

const TripsTitle = () => {
    useEffect(() => {
        window.location.href = "#titleTrips"
    });

    return (
        <section id='titleTrips'>
            <div className="rectangularSubtitleContainers">
                <div className="purpleBgSubtitleContainer">
                    <h1 className="whiteSubtitles">Destinos para vos</h1>
                </div>
            </div>
            <div className="rectangularSubtitleContainers">
                <h2 id="tripsSubtitle"><b>Todos los destinos que tenemos para que puedas disfrutar</b><br/><b id="pinkTripsSubtitle"> ¿Te gustaría repetir?</b></h2>
            </div>
        </section>
    )
}

export { TripsTitle };