import React, { useState } from "react";

export const TrafficLight = () => {
    const [color, setColor] = useState('');
    const glowGreen = (color) => {
        setColor(color)
    }
    return (

        <div className="semaforoyposte container p-5">
            <div className="poste"></div>
            <div className="semaforo">
                <button className={`bombillo btn btn-danger mx-5 glow-${color == 'red' ? color : ''}`} onClick={() => setColor('red')}></button>
                <button className={`bombillo btn btn-warning mx-5 glow-${color == 'yellow' ? color : ''}`} onClick={() => setColor('yellow')}></button>
                <button className={`bombillo btn btn-success glow-${color == 'green' ? color : ''}`} onClick={() => setColor('green')}></button>
            </div>

        </div>
    );
};