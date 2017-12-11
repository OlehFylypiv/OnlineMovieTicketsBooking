import { Form, FormGroup, FormControl, ControlLabel, Button, Navbar } from 'react-bootstrap'
import React, { Component } from 'react';

require('../css/subscribe.css');

export default class CustomFooter extends Component {
    render() {
        return (
            <div className="container">
                <div className="subscribe">
                    <Navbar inverse>
                    <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Subscribe for news</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                        <FormGroup>
                        <FormControl type="email" placeholder="Email" />
                        </FormGroup>
                        {' '}
                        <Button  bsStyle="success" type="submit">Submit</Button>
                    </Navbar.Form>
                    </Navbar.Collapse>
                    </Navbar>
                    <h4>
                        All rights reserved ©
                    </h4>
                    <h5>
                        Lviv 2017
                    </h5>
                </div>
            </div>
        );
    }
}


/* <Form inline>
<FormGroup controlId="formInlineName">
  <ControlLabel>Name</ControlLabel>
  {' '}
  <FormControl type="text" placeholder="Jane Doe" />
</FormGroup>
{' '}
<FormGroup controlId="formInlineEmail">
  <ControlLabel>Email</ControlLabel>
  {' '}
  <FormControl type="email" placeholder="jane.doe@example.com" />
</FormGroup>
{' '}
<Button type="submit">
  Send invitation
</Button>
</Form> */