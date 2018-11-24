import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Input, Button } from 'semantic-ui-react';

//import { SignUpLink } from './SignUp';
import Footer from '../Footer/Footer';
import { auth } from '../../firebase';
import { PasswordForgetLink } from './PasswordForget';
import * as routes from '../../constants/routes';

import './UserAuth.css';

const SignInPage = ({ history }) =>
  <div className={'fill'}>
    <Container textAlign={'center'} className={'fill-upload'}>
      <h1>Sign In</h1>
      <SignInForm history={history} />
      <br/>
      <PasswordForgetLink />
      {/*<SignUpLink />  */}
    </Container>
    <Footer/>
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.LANDING);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <Input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <br/>
        <Input
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <br/>
        <br/>
        <Button disabled={isInvalid} type="submit" color={'green'}>
          Sign In
        </Button>
        <br/>
        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};