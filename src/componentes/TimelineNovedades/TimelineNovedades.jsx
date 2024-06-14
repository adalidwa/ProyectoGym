import React, { useEffect, useState } from "react";
import './TimelineNovedades.css';
import Novedades from './Novedades';
import cerrarNovedades from '/src/assets/icons/x.png';

function TimelineNovedades() {
    const [novedades, setNovedades] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        fetch('https://661037cf0640280f219c98cc.mockapi.io/api/v2/componentes')
            .then(response => response.json())
            .then(data => {
                setNovedades(data);
                const randomIndex = Math.floor(Math.random() * (data.length - 1));
                setSelectedIndex(randomIndex);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    if (novedades.length === 0 || selectedIndex === null || !visible) { 
        return null; 
    }

    const itemsToShow = novedades.slice(selectedIndex, selectedIndex + 2);

    const handleClose = () => {
        setVisible(false);
    };

    return (
        <div className="ContenedorGeneral">
            <button className="cerrarNovedades" onClick={handleClose}>
                <img className="cerrarNovedades" src={cerrarNovedades} alt="Cerrar novedades" />
            </button>
            {itemsToShow.map((novedad, index) => (
                <Novedades 
                    key={novedad.id}
                    fecha={novedad.FechaNovedad}
                    novedad={novedad.Novedad}
                    descripcion={novedad.DescripcionNovedad}
                />
            ))}
        </div>
    );
}

export default TimelineNovedades;
