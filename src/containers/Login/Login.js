import React, { Component } from 'react'
import FormGroup from 'react-bootstrap/es/FormGroup';
import ControlLabel from 'react-bootstrap/es/ControlLabel';
import FormControl from 'react-bootstrap/es/FormControl';
import Button from 'react-bootstrap/es/Button';
import Col from 'react-bootstrap/es/Col';
import Form from 'react-bootstrap/es/Form';
import  axios from "axios";
import presets from '../../helper/presets'
import Aux from '../../hoc/Aux';
import classes from './Login.css'
import {Redirect} from "react-router-dom";

class Login extends Component {
  state = {
    login: 'test',
    password: 'test',
    showError: false,
    isAuth: false
  }
  loginHandler = () => {
    (async () => {
      try {
        console.log(this.state);
        let response = await axios.post(presets.SERVER_URL + '/rest-auth/login/', {username: this.state.login, password: this.state.password});
        if (response.status === 200) {
          localStorage.setItem('token', response.data.key);
          this.setState({showError: false, isAuth: true})
        }
        else { console.log(response);}
      } catch (e) {
        this.setState({showError: true})
      }
    })()
  }
  render () {
    let error = this.state.showError ? (
      <p className={classes.Error}>There is no user with such login or password.</p>) : '';
    if (this.state.isAuth) {return <Redirect to='/profiles' />}
    return (
      <Aux>
        <Form horizontal>
          <FormGroup controlId='formHorizontalEmail'>
            <Col componentClass={ControlLabel} sm={2}>
              Login
            </Col>
            <Col sm={6}>
              <FormControl
                type='text'
                placeholder='Login'
                value={this.state.login}
                onChange={(event) => {this.setState( { login: event.target.value } ) }}
              />
            </Col>
          </FormGroup>

          <FormGroup controlId='formHorizontalPassword'>
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={6}>
              <FormControl
                type='password'
                placeholder='Password'
                value={this.state.password}
                onChange={(event) => {this.setState( { password: event.target.value } ) }}
              />
            </Col>
          </FormGroup>

          <Col smOffset={2} sm={10}>{error}</Col>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type='button' onClick={this.loginHandler}>Sign in</Button>
            </Col>
          </FormGroup>
        </Form>
      </Aux>
    )
  }
}

export default Login