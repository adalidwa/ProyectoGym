import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notificacion = () => {
    useEffect(() => {
        const intervalId = setInterval(() => {
            /* toast.dismiss(); */ 
            toast.success("Estimado usuario, le recordamos que su membresía vence el 15 de mayo", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
               
                style: {
                    backgroundColor: "#F6EFE2"
                }
            });
        }, 10000); // Cambia 6000 al intervalo deseado en milisegundos

        // Limpia el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <ToastContainer />
        </div>
    );
}

export default Notificacion;
