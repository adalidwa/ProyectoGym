import React, { useEffect, useState } from 'react';
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

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

export default function LinesChart() {
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });
    const [minY, setMinY] = useState(0); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://6611d8dc95fdb62f24edc940.mockapi.io/api/v2/users');
                const data = await response.json();

                const randomIndex = Math.floor(Math.random() * data.length);
                const selectedUser = data[randomIndex];

        
                const minPeso = Math.min(...selectedUser.pesos);

                setMinY(minPeso - 10);

                const mesesSet = new Set();
                const datasets = [{
                    label: 'peso vs tiempo',
                    data: selectedUser.pesos,
                    tension: 0.5,
                    fill: true,
                    borderColor: '#C04551',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    pointRadius: 5,
                    pointBorderColor: '#C04551',
                    pointBackgroundColor: '#C04551',
                }];

                selectedUser.meses.forEach((mes) => mesesSet.add(mes));

                const meses = Array.from(mesesSet);

                setChartData({
                    labels: meses,
                    datasets: datasets,
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const options = {
        scales: {
            y: {
                min: minY, 
                ticks: {
                    color: '#FFFFFF',
                },
                grid: {
                    color: '#D5D5D5',
                },
            },
            x: {
                ticks: { color: '#FFFFFF' },
                grid: {
                    color: '#28282B',
                },
            },
        },
    };

    return <Line data={chartData} options={options} />;
}
