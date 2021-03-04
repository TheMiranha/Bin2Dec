import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            input: 0,
            result: 'Ainda não calculado'
        }
    }

    convert = () => {
        let bin = this.state.input;
        let dec = 0;
        for (let c = 0; c < bin.length; c++) dec += Math.pow(2, c) * bin[bin.length - c - 1]; 
        this.setState({result: dec});
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <p className="title">Conversor de Binário para Decimal</p>
                    <input value={this.state.input} onChange={a => this.setState({input: a.target.value})}type="number"/>
                    <button onClick={this.convert}>Converter</button>
                    <p>Resultado: {this.state.result}</p>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));