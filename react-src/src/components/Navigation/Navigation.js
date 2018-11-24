import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Menu, Segment } from 'semantic-ui-react';
import AlertContainer from 'react-alert';
import { auth } from '../../firebase';
import { connect } from 'react-redux';

import * as routes from '../../constants/routes';

import './Navigation.css';

class Navigation extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = { }

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }){
    this.setState({ activeItem: name })
  }

  render() {
    let alertOptions = {
      offset: 14,
      position: 'bottom left',
      theme: 'dark',
      time: 2000,
      transition: 'scale'
    }
    const { activeItem } = this.state

    const LoggedOut = () => (
      <Menu.Menu position='right'>
        <Menu.Item name='logout' active={activeItem === 'logout'} onClick={auth.doSignOut} > Logout </Menu.Item>
      </Menu.Menu>
    )

    const LogInOut = this.props.authUser ? <LoggedOut/> : '';

    const hideClass = this.props.authUser ? '' : 'hide-menu';
    const Header = () => (
      <Grid>
        <Grid.Column only='tablet computer'>
        <Segment className={'segment-color'}>
          <Menu size={'small'} className={'swine-menu'}>
            <Menu.Item header>
              Junction 2018
            </Menu.Item>
            <Menu.Item
            name='dashboard'
            className={hideClass}
            as={Link}
            to={routes.LANDING}
            active={activeItem === 'dashboard'}
            onClick={this.handleItemClick}
            >
              Dashboard
            </Menu.Item>


            { LogInOut }
          </Menu>
          </Segment>
        </Grid.Column>
      </Grid>
    )
    return (
          <div>
            <Header/>
            <AlertContainer ref={a => this.msg = a} {...alertOptions} />
          </div>
    );
  }
};

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Navigation);