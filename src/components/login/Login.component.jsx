import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp({
  apiKey: 'AIzaSyDUpqh8g1u_ExncQVPWu7atz_6iOjldAvg',
  authDomain: 'santex-battleship.firebaseapp.com'
})

class Login extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isSignedIn: false,
      user: this.props.user
    };
  }

  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn: !!user});
      this.setState({ user: user});
      console.log('user', user);
    })
  }

  render() {
    return (
      <div className="Login">
        {this.state.isSignedIn ? (
          <span>
            <button onClick={() => firebase.auth().signOut()}>Sign out</button>
            <h2>Welcome {firebase.auth().currentUser.displayName}</h2>
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }
}

export default Login;
