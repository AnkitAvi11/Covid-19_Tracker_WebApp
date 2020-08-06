import React from 'react';

import { Doughnut, Bar, Line } from 'react-chartjs-2';

class Total extends React.Component {

    render () {
        console.log(this.props.data)
        let jsx = <div className="ui segment container" style={{padding : "200px", marginTop : "20px"}}>
        <div className="ui active loader"></div>
            <p>Loading</p>
        </div>

        let other = <div className="ui segment container" style={{padding : "200px", marginTop : "20px"}}>
        <div className="ui active loader"></div>
            <p>Loading</p>
        </div>

        if (this.props.data!=null) {

            let doughData = {
                labels : ['Total Confirmed Cases', 'Total Deaths', 'Total recovery'],
                datasets : [
                    {
                        label : "Videos made",
                        backgroundColor : ["orange", "red", "green"],
                        data : [this.props.data.confirmed, this.props.data.deaths, this.props.data.recovered]
                    }
                ]
            }

            jsx = <Doughnut 
                data={doughData}
            />

            other = <div>
                    <h3>Total confirmed cases : {this.props.data.confirmed}</h3>
                        <h3>Total Deaths : {this.props.data.deaths}</h3>
                        <h3>Total Recovered : {this.props.data.recovered}</h3>
            </div>
        }

        return (
            <div className="container ui two column grid">
                <div className="row" style={{marginTop : "40px"}}>
                    <div className="column">{jsx}</div>
                    <div className="column">
                        {other}
                    </div>
                </div>
            </div>
        )
    }

}

export default Total;