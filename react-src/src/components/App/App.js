import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Grid, Container } from 'semantic-ui-react';
import { connect } from 'react-redux'

import Navigation from '../Navigation/Navigation';
// import Room from '../Media/RoomPage';
import Dashboard from '../Dashboard/Dashboard';
import SignInPage from '../UserAuth/SignIn';
import PasswordForgetPage from '../UserAuth/PasswordForget';

import * as routes from '../../constants/routes';
import withAuthentication from '../withAuthentication';

import './App.css';

class App extends Component {

  render() {    
    return (
        <BrowserRouter>
          <div className={'full'}>
          <Navigation/>
          <Grid>
              <Grid.Row only='tablet computer' className={'full-grid'}>
                  <Switch>
                    <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
                    <Route exact path={routes.LANDING} component= { Dashboard } />
                    {/* <Route path="/r/:room" component={Room} /> */}
                    <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
                    <Route path={routes.LANDING} component={() => <SignInPage />} />
                  </Switch>
              </Grid.Row>
              <Grid.Row only='mobile'>
                <Container text>
                <p>Sorry we aren't mobile friendly yet!</p>
                </Container>
              </Grid.Row>
            </Grid>
          </div>
        </BrowserRouter>
    );
  }
}

export default withAuthentication(connect(null, null )(App));