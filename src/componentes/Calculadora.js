import React from 'react';

const initialState = {
    num1: '',
    num2: '',
    skarleth: true,
    operacion: null,
    mostrar: ''
};

class Calculadora extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    resetState() {
        this.setState(initialState);
    }

    resolver(value) {
        const { mostrar, num1, num2, skarleth, operacion } = this.state;

        if (value === '.') {
            if (skarleth) {
                if (num1.indexOf(value) === -1) {
                    this.setState(state => ({
                        num1: num1 + value,
                        mostrar: mostrar + value
                    }));
                }
            } else {
                if (num2.indexOf(value) === -1) {
                    this.setState(state => ({
                        num2: num2 + value,
                        mostrar: mostrar + value
                    }));
                }
            }
        } else if (Number.isInteger(value)) {
            if (skarleth) {
                this.setState(state => ({
                    num1: num1 + value,
                    mostrar: mostrar + value
                }));
            } else {
                if (num2.indexOf('.')) {
                    this.setState({
                        num2: num2 + value,
                        mostrar: mostrar + value
                    });
                }
            }
        } else {
            if (value === 'c') {
                this.resetState();
            
            }else if (operacion) {
                this.setState(state =>({
                    mostrar: mostrar.replace(operacion, value),
                    operacion: operacion,
                }))
                
            } else if (value === '=') {
                this.setState(state => ({
                    mostrar: this.calcular(operacion),
                }));
                this.setState(state => ({
                        num1: '',
                        num2: '',
                        operacion: null,
                    }))
            } else if (value === '+') {
                this.setState(state => ({
                    skarleth: false,
                    operacion: '+',
                    mostrar: mostrar + value
                }));
            } else if (value === '-') {
                this.setState(state => ({
                    skarleth: false,
                    operacion: '-',
                    mostrar: mostrar + value
                }));
            } else if (value === '*') {
                this.setState(state => ({
                    skarleth: false,
                    operacion: '*',
                    mostrar: mostrar + value
                }));
            } else if (value === '/') {
                this.setState(state => ({
                    skarleth: false,
                    operacion: '/',
                    mostrar: mostrar + value
                }));

            }
        }
        console.log('>>', this.state);
    }

    calcular(operacion) {
        let resultado = 0;
        const { num1, num2 } = this.state;

        if (operacion === '+') {
            resultado = Number(num1) + Number(num2);
        } else if (operacion === '-') {
            resultado = num1 - num2;
        } else if (operacion === '/') {
            resultado = num1 / num2;
        } else if (operacion === '*') {
            resultado = num1 * num2;
        } else {
            resultado = 1111
        }
        return resultado;
    }

    handleChange = (e) => {

        this.setState({
            mostrar: e.target.value
        })
        console.log(this.state)
    }

    render() {
        const {
            mostrar,
        } = this.state;

        return (
            <div className="">
                <table border="1">
                    <tr>
                        <td colspan="3">
                            <input type="text" value={mostrar} onChange={this.handleChange} />
                        </td>
                        <td><button onClick={() => this.resolver('c')}>c</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => this.resolver(1)}>1</button></td>
                        <td><button onClick={() => this.resolver(2)}>2</button> </td>
                        <td><button onClick={() => this.resolver(3)}>3</button> </td>
                        <td><button onClick={() => this.resolver('/')}>/</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => this.resolver(4)}>4</button></td>
                        <td><button onClick={() => this.resolver(5)}>5</button> </td>
                        <td><button onClick={() => this.resolver(6)}>6</button> </td>
                        <td><button onClick={() => this.resolver('-')}>-</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => this.resolver(7)}>7</button></td>
                        <td><button onClick={() => this.resolver(8)}>8</button> </td>
                        <td><button onClick={() => this.resolver(9)}>9</button> </td>
                        <td><button onClick={() => this.resolver('+')}>+</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => this.resolver('.')}>.</button></td>
                        <td><button onClick={() => this.resolver(0)}>0</button> </td>
                        <td><button onClick={() => this.resolver('=')}>=</button> </td>
                        <td><button onClick={() => this.resolver('*')}>*</button></td>
                    </tr>
                </table>
            </div>
        );
    }
}
export default Calculadora;