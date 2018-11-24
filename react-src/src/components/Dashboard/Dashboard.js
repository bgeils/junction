import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Container, Header, Input } from 'semantic-ui-react';
import WebcamCapture from './WebcamCapture';

import withAuthorization from '../withAuthorization';
import Footer from '../Footer/Footer';
import './Dashboard.css';

class Dashboard extends Component {

  render() {

    return (
      <div className={'fill'}>
      <Container className={'fill-upload'}>
        <div className="header">
          <Header as={'h2'} textAlign={'center'}>
            Junction SAP Challenge
          </Header>
        </div>

        <div className="chat-video-container">
          <div className="video">
            <WebcamCapture />
            <div className="customer-stats">
              <Header>Client Info</Header>
              <Input label='Name' iconPosition='left' placeholder="Client's Name" className="input-classic"/>
              <Input label='Age' iconPosition='left' placeholder="Client's Age" className="input-classic"/>
            </div> 
          </div>

          <div className="chat">
            TODO Chat App here
          </div>  
        </div>

        <div className="timeseries">
        </div>

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

