import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import './Footer.css';

class Footer extends Component {
  render() {

    return (
      <div className={'footer'}>
        <Container>
        <div className={'footer-text'}>
       		Copyright All Rights Reserved © 2018 Inc.
       	</div>
        </Container>
      </div>
      );
  }
};

export default Footer;