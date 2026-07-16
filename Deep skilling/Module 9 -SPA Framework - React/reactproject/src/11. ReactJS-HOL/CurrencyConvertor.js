import React from "react";

class CurrencyConvertor extends React.Component {

    constructor() {
        super();

        this.state = {
            rupees: "",
            euro: ""
        };
    }

    handleChange = (e)=>{
        this.setState({
            rupees: e.target.value
        })
    }

    handleSubmit = () =>{
        const eur = this.state.rupees/90
        this.setState({
            euro: eur.toFixed(2)
        })
    }

    render() {
        return (
            <div>
                <h2>Currency Convertor</h2>

                <input
                    type="number"
                    placeholder="Enter Rupees"
                    value={this.state.rupees}
                    onChange={this.handleChange}
                />

                <button onClick={this.handleSubmit}>
                    Convert
                </button>

                <h3>
                    Euro: {this.state.euro}
                </h3>
            </div>
        );
    }
}

export default CurrencyConvertor;