import React from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import { firebase } from '../firebase';

import './Loading.css';


const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        authUser: null,
        url: null,
        ready: false
      };

      this.server = process.env.REACT_APP_API_URL || '';

    }

    componentDidMount() {
      const { onSetAuthUser } = this.props;

      firebase.auth.onAuthStateChanged(authUser => {
        if(authUser){
          this.userFound(authUser)
        }else{
          onSetAuthUser(null);
          this.setState({ ready: true})
        }
      });
    }

    userFound(authUser){
      let _this = this;
      firebase.auth.currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        // axios.get(
        //   `${_this.server}/api/users/${authUser.uid}`,
        //     {headers: {"Authorization" : `Bearer ${idToken}`}}
        // )
        // .then((response) => {
        //   let ret = Object.assign({}, authUser, response.data);
          let ret = {};
          ret['token'] = idToken
          
          // setTimeout(function(){ // For test purposes
            _this.setState({ ready: true });
            _this.props.onSetAuthUser(ret)
            // console.log('ready true')
            // _this.getUrl();
          // }, 100000); 
        // })
        // .catch((err) => {
        //   throw err;
        // });
      }).catch(function(error) {
        console.log(error)
      });
      
    }

    render() {
      return (
        <div>
          { this.state.ready ? "" : <div className="loading">Loading&#8230;</div> }
          <Component />
        </div>
      );
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    onSetAuthUser: (authUser) => dispatch({ type: 'AUTH_USER_SET', authUser }),
  });

  return connect(null, mapDispatchToProps)(WithAuthentication);
}

export default withAuthentication;