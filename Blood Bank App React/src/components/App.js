import React from 'react';
//import logo from './logo.svg';
import '../App.css';
import * as firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


// import Signup from './signup'
// import Signup from './signup';

// import Login from './login';
import { Link } from 'react-router'
var config = {
  apiKey: "AIzaSyCIEM_hEYlX78eC31MpowEax-985GMrISU",
  authDomain: "react-blood-bank-ba06d.firebaseapp.com",
  databaseURL: "https://react-blood-bank-ba06d.firebaseio.com",
  storageBucket: "react-blood-bank-ba06d.appspot.com",
  messagingSenderId: "183789707958"
};
firebase.initializeApp(config);
const style = {
  margin: 12,
};

class App extends React.Component {
 

  render() {
    return (

      < MuiThemeProvider>
        <div>
          <AppBar
            title="BloodBank" iconClassNameRight="muidocs-icon-navigation-expand-more" >
          {/*<h1>Blood Blank </h1>*/}
          </AppBar>
            


          <Link to="/signup"> <RaisedButton label="Signup" primary={true} style={style} /></Link>

          <Link to="/login"><RaisedButton label="Login" primary={true} style={style} /></Link>
          {this.props.children}
        </div>
      </MuiThemeProvider>



    )

  }
}
export default App;


