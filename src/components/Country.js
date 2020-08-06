import React from 'react';

import {Bar} from 'react-chartjs-2';

class Country extends React.Component {
    render () {

        let labels = [], confirmed = [], deaths = [], recovered = [];

        this.props.data.data.forEach(day => {
            labels.push(day.date);
            confirmed.push(day.confirmed);
            deaths.push(day.deaths);
            recovered.push(day.recovered);
        })

        

        let barData = {
            labels : labels,
            datasets : [
                {
                    label : "Videos made",
                    data : confirmed
                }
            ]
        }

        return (
            <div className="container">
                <Bar data={barData} />
            </div>
        )
    }
}

export default Country;