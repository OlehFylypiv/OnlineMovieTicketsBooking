import React, { Component } from 'react';
import { Button, FormControl, Panel  } from 'react-bootstrap';
import firebaseRef from '../firebaseConfig';

require('../css/myFormStyles.css');

const SECRET_KEY = '1234:5a%d%02792a';

export default class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'unnamed',
            surname: 'unnemed',
            email: 'freek@gmail.com',
            password: '12345',
            city: 'Lviv',
            open: false
        }

        this.getBase = this.getBase.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleSurName = this.handleSurName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleCity = this.handleCity.bind(this);
    }

    getBase() {
        firebaseRef.ref('users/' + Date.now()).set({
            username: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            password: this.state.password
        });
    }

    handleName(event) {
        this.setState({ name: event.target.value });
    }

    handleSurName(event) {
        this.setState({ surname: event.target.value });
    }

    handleEmail(event) {
        this.setState({ email: event.target.value });
    }

    handlePassword(event) {
        let resultPassword = '';
        let value = event.target.value;
        
        for (let i = 0; i < value.length; i++) {
            resultPassword += SECRET_KEY[i] + value[i];
        }

        this.setState({ password: resultPassword });
    }

    handleCity(event) {
        this.setState({ city: event.target.value });
    }

    render() {
        return (
            <div className="container">
                <hr/>
                 <Button  className="join-button" bsStyle="primary" onClick={() => this.setState({ open: !this.state.open })}>
                    Join Lviv Cinema 4DX
                </Button>
                <Panel className="join-panel" collapsible expanded={this.state.open}>
                    <div className="myForm">
                        <form>
                            <FormControl
                                type="text"
                                placeholder="Name"
                                onChange={this.handleName}
                                className="form-inputs-db"
                                required="true"
                            />
                            <FormControl
                                type="text"
                                placeholder="Sur Name"
                                onChange={this.handleSurName}
                                className="form-inputs-db"
                            />
                            <FormControl
                                type="email"
                                placeholder="Email"
                                onChange={this.handleEmail}
                                className="form-inputs-db"
                                required="true"
                            />
                            <FormControl
                                type="password"
                                placeholder="Password"
                                onChange={this.handlePassword}
                                className="form-inputs-db"
                            />
                            <FormControl
                                type="text"
                                placeholder="City"
                                onChange={this.handleCity}
                                className="form-inputs-db"
                            />
                            <Button 
                                bsStyle="success" 
                                type="submit" 
                                onClick={this.getBase}
                                className="form-inputs-db"
                            >
                                Submit
                            </Button>
                        </form>
                    </div> 
                </Panel>
               
                              
            </div>
        );
    }
}
