import React, { useEffect, useState } from "react";
import './TimelineNovedades.css';
import Novedades from './Novedades';
import cerrarNovedades from '/src/assets/icons/x.png';

function TimelineNovedades() {
    const [novedades, setNovedades] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);

    useEffect(() => {
        fetch('/Novedades.json')
            .then(response => response.json())
            .then(data => {
                setNovedades(data);
                const randomIndex = Math.floor(Math.random() * (data.length - 1)); // Ensure there's a successor
                setSelectedIndex(randomIndex);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    if (novedades.length === 0 || selectedIndex === null) {
        return <div>Cargando...</div>;
    }

    const itemsToShow = novedades.slice(selectedIndex, selectedIndex + 2);

    return (
        <div className="ContenedorGeneral">
            <button className="cerrarNovedades">
                <img className="cerrarNovedades" src={cerrarNovedades} alt="Cerrar novedades" />
            </button>
            {itemsToShow.map((novedad, index) => (
                <Novedades 
                    key={index}
                    fecha={novedad.FechaNovedad}
                    novedad={novedad.Novedad}
                    descripcion={novedad.DescripcionNovedad}
                />
            ))}
        </div>
    );
}

export default TimelineNovedades;
