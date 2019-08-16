import React from 'react';
class Calculadora extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            num1: NaN,
            num2: NaN,
            mostrar: 69
        };
    }

    resolver(value) {
        
        console.log('>>', this.state)
        if (Number.isInteger(value)) {
            console.log('NÚMERO');
            if(this.state.num1){

            }else{
                
            }
        } else {
            console.log('Operación');
        }

        this.setState(state => ({
            //mostrar: NaN
        }));
    }

    handleChange(e) {
        this.setState(state => ({ mostar: e.target.value }));
    }

    render() {
        return (
            <div className="">
                <table border="1">
                    <tr>
                        <td colspan="3">
                            <input type="text" value={this.state.mostar}/>
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