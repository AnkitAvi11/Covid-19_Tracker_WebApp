import React, {Component} from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countries : [],
            selectedCountry : {
                iso : null
            }
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        console.log('Form submitted')
    }

    onChange = (e) => {
        this.setState({
            selectedCountry : {
                iso : e.target.value
            }
        })
        this.props.onSelect(e.target.value)
    }

    componentDidMount = () => {
        fetch("https://covid-api.com/api/regions")
        .then(res => res.json())
        .then(data => {
            this.setState({
                countries : data.data
            })
        }).catch(err=>{
            console.log(err)
        });
    }

    render() {

        let countries = this.state.countries.map((country, index) => {
            return (
                <option value={country.iso} key={index} >{country.name}</option>
            )
        })

        return (
            <div className="container">
                <form action="" method="post" onSubmit={this.submitForm}>
                <div className="ui form container">
                <div className="ui form">
                    <div className="field">
                    <select onChange={this.onChange}>
                        <option value="">Select your country</option>
                        {countries}
                    </select>
                    </div>
                    </div>
                </div>
                </form>
            </div>
        )
    }

}

export default Form;