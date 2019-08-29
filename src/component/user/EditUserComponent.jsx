import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class EditUserComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            first_name: '',
            last_name: '',
        }
        this.saveUser = this.saveUser.bind(this);
        this.loadUser = this.loadUser.bind(this);
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser() {
        ApiService.fetchUserById(window.localStorage.getItem("userId"))
            .then((res) => {

                console.log('REST', res)
                let user = res.data.data;
                this.setState({
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                avatar: user.avatar,
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveUser = (e) => {
        e.preventDefault();
        let user = {id: this.state.id, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age, salary: this.state.salary};
        ApiService.editUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/users');
            });
    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>Edit User</Typography>
                <form>

                        <TextField type="text" placeholder="ID" fullWidth margin="normal" name="id" readOnly={true} value={this.state.id}/>

                        <TextField placeholder="First Name" fullWidth margin="normal" name="firstName" value={this.state.first_name} onChange={this.onChange}/>

                        <TextField placeholder="Last name" fullWidth margin="normal" name="lastName" value={this.state.last_name} onChange={this.onChange}/>

                        <TextField type="email" placeholder="Email" fullWidth margin="normal" name="email" value={this.state.email} onChange={this.onChange}/>

                        <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>

                </form>
            </div>
        );
    }
}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default EditUserComponent;