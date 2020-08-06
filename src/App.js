import React, {Component} from 'react';

import Form from './components/Form';
import Total from './components/Total';
import Country from './components/Country';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countryCode : null,
            data : null,
            selectedCountry : null
        }
    }

    componentDidMount = () => {
        fetch("https://covid-api.com/api/reports/total")
        .then(res => res.json())
        .then(data => {
            this.setState({
                data : data.data
            })
        }).catch(err=>console.log(err))
    }

    onSelect = (countryCode) => {
        fetch(`https://covid-api.com/api/reports?iso=${countryCode}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                data : data.data,
                selectedCountry : data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    render() {

        let renderData = <Total data={this.state.data} />

        if(this.state.selectedCountry!=null) {
            renderData = <Country 
                data = {this.state.selectedCountry}
            />
        }
        
        return (
            <div className="container" style={{marginTop : "20px"}}>
                <h1 style={{textAlign : "center", color : "dodgerblue"}}>Covid-19 Tracker Dashboard</h1>
                <Form onSelect={this.onSelect} />
                {renderData}
            </div>
        )
    }
}

export default App;