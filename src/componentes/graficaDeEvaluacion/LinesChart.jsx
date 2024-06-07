import { Line } from "react-chartjs-2";
import{
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
}   from 'chart.js';
import { color } from "chart.js/helpers";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);


var beneficios = [0, 56, 60, 65, 58, 50, 60];
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

var midata = {
    labels: meses,
    datasets: [ 
        {
            label: 'Peso vs Tiempo',
            data: beneficios,
            tension: 0.5,
            fill : true,
            borderColor: '#C04551',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            pointRadius: 5,
            pointBorderColor: '#C04551',
            pointBackgroundColor: '#C04551',
        },
        
    ],
};

var misoptions = {
    scales : {
        
        y:{
            min : 0 ,
            ticks: {
                color: '#FFFFFF', 
            },
            grid: {
                color: '#D5D5D5'
            }
        },
        x: {
            ticks: { color: '#FFFFFF'},
            grid : {
                color:'#28282B'
            }
        },
        
    }
};

export default function LinesChart(){
    return <Line data={midata} options={misoptions}/>
}