import React from 'react';
import { Button } from 'react-bootstrap';

const initialState = {
    num1: '',
    num2: '',
    skarleth: true,
    operacion: null,
    mostrar: '',
    usuarios: []
};

class Calculadora extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }


    componentWillMount() {
        //GET
        //POST ...
        fetch('https://reqres.in/api/users?page=1')
            .then(response => response.json())
            .then(users => {
                console.log(users)
                this.setState({
                    usuarios: users.data
                })
            })
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

            } else if (operacion) {
                this.setState(state => ({
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

                <table>
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>IMAGEN</td>
                            <td>NOMBRE</td>
                            <td>ACCIONES</td>
                        </tr>


                        {this.state.usuarios.map(function (usuario, index) {
                            return (
                            <tr>
                                <td>{usuario.id}</td>
                                <td> <img src={usuario.avatar}></img></td>
                                <td>{usuario.first_name} {usuario.last_name}</td>
                                <td>
                                    <Button>Editar</Button>
                                    <Button variant="danger">Eliminar</Button>

                                </td>
                            </tr>
                            )


                        })}

                    </tbody>
                </table>




            </div>
        );
    }
}
export default Calculadora;