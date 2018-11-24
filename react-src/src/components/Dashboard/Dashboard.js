import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Container, Header } from 'semantic-ui-react';
import WebcamCapture from './WebcamCapture';

import withAuthorization from '../withAuthorization';
import Footer from '../Footer/Footer';
import './Dashboard.css';

class Dashboard extends Component {

  render() {

    return (
      <div className={'fill'}>
      <Container className={'fill-upload'}>
          <Header as={'h2'} textAlign={'center'}>
            Junction SAP Challenge
          </Header>

          <WebcamCapture />

          <br/>

      </Container>
      <Footer/>
      </div>
    );
  }
}


const authCondition = (authUser) => !!authUser;

const mapStateToProps = (state) => ({
  sessionState: state.sessionState.authUser,
  baseURL: state.baseURL
});

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, null)
)(Dashboard);

