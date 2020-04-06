import React from 'react';
import { Line } from 'react-chartjs-2'
import './BigGraphBox.css'


const BigGraphBox = (props) => {
    return (
        <div className="charBox">
            <div className="container">
                <div className="inner-content">
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