import React from 'react';
import { Line } from 'react-chartjs-2'
import './BigGraphBox.css'

const data = {
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [{
        label: 'Physical',
        fill: false,
        data: [-0.13617, -0.3984, -0.63109, -0.81697, -0.94226, -0.99767, -0.97908, -0.88789, -0.73084, -0.51958, -0.2698],
        borderColor: [
            'rgb(168, 140, 216)'
        ],
        borderWidth: 2
    },
    {
        label: 'Emotional',
        fill: false,
        data: [0.90097, 0.97493, 1, 0.97493, 0.90097, 0.78183, 0.62349, 0.43388, 0.22252, 0, -0.22252],
        borderColor: [
            'rgb(15,195,171)'
        ],
        borderWidth: 2
    },
    {
        label: 'Intellectual',
        fill: false,
        data: [0.45823, 0.28173, 0.09506, -0.09506, -0.28173, -0.45823, -0.61816, -0.75575, -0.86603, -0.945, -0.98982],
        borderColor: [
            'rgb(249,193,5)'
        ],
        borderWidth: 2
    }]
}


const BigGraphBox = (props) => {
    return (
        <div className="charBox">
            <div className="container">
                <div id="chart-content" className="inner-content">
                    <div className="row">
                        <h5>15 Day Graph</h5>
                    </div>
                    <div className="row">
                        <p className="subtitle">Starting Date: <span>{props.dateString}</span></p>
                    </div>
                    <div className="row">
                        <Line
                            data={props.data}
                            width={100}
                            height={50}
                            options={{
                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: false,
                                            suggestedMax: 1,
                                            suggestedMin: -1
                                        }
                                    }]
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BigGraphBox;