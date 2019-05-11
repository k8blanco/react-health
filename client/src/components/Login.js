import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import {Container} from "../components/GatherInfo/ContainerBox"
// import './Login.css';

import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      message: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    axios.post('/api/auth/login', { username, password })
      .then((result) => {
        localStorage.setItem('jwtToken', result.data.token);
        this.setState({ message: '' });
        this.props.history.push('/clientside')
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.setState({ message: 'Login failed. Username or password not match' });
        }
      });
  }

  render() {
    const { username, password, message } = this.state;
    return (

      <React.Fragment>
       <div className="text-center mt-4">
      <h2>Welcome back</h2>
      <p className="lead">Sign in to your account to continue.</p>
    </div>

    <Card>
    <CardBody>
      <div class="container">
        <form class="form-signin" onSubmit={this.onSubmit}>
          {message !== '' &&
            <div class="alert alert-warning alert-dismissible" role="alert">
              { message }
            </div>
          }
              <Form>
              <FormGroup>
          <Label>Email</Label>
          <Input type="email" class="form-control" placeholder="Enter your email" name="username" value={username} onChange={this.onChange} required/>
          </FormGroup>
          <FormGroup>
          <Label>Password</Label>
          <input type="password" class="form-control" placeholder="Enter your password" name="password" value={password} onChange={this.onChange} required/>
          </FormGroup>
          <Button color="primary" size="lg" type="submit"> Sign in</Button>
          {/* <p>
            Not a member? <Link to="/register"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Register here</Link>
          </p> */}
          </Form>
        </form>
      </div>
      </CardBody>
      </Card>
      </React.Fragment>

    );
  }
}

export default Login;