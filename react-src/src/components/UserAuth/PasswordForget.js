import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Input, Button } from 'semantic-ui-react';

import { auth } from '../../firebase';

const PasswordForgetPage = () =>
  <Container textAlign={'center'}>
    <h1>Forgot Your Password</h1>
    <PasswordForgetForm />
  </Container>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        this.setState({ info: 'Check your email to reset your password.'})
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      error,
      info
    } = this.state;

    const isInvalid = email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <Input
          value={this.state.email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <br/>
        <br/>
        <Button disabled={isInvalid} type="submit" color={'green'}>
          Reset My Password
        </Button>

        { error && <p>{error.message}</p> }
        <br/>
        { info && <p>{info}</p> }
      </form>
    );
  }
}

const PasswordForgetLink = () =>
  <p>
    <Link to="/pw-forget">Forgot Password?</Link>
  </p>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};