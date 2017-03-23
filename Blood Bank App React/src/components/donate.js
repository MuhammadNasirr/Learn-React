import React from 'react';
// import { Link } from 'react-router';
import * as firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
// import DropDownMenu from 'material-ui/DropDownMenu';
// import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
// import DropDownMenuSimpleExample from './dropdown'


// import Home from "./home";
class Donate extends React.Component {

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {open: false};

  }
 

  handleToggle = () => this.setState({open: !this.state.open});

  submit(e) {
    e.preventDefault();
    let Country = this.refs.Country.getValue();
    // let BloodGroup = this.refs.BloodGroup.getValue();
    let city = this.refs.city.getValue();
    let area = this.refs.area.getValue();
    let gender = this.refs.gender.getValue();
    let weight = this.refs.weight.getValue();
    let age = this.refs.weight.getValue();
    let mobilenum = this.refs.mobnum.getValue();
    console.log(Country, city, gender, weight, mobilenum, area, age)
    let donordetails = {
      city: city,
      Country: Country,
      gender: gender,
      weight: weight,
      age: age,
      mobilenum: mobilenum,
      area: area
    }

    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('donors/' + userId).set(donordetails)
    alert("thanks for your input")
    browserHistory.push('/home')
// let Blood= {
//   bloodGroup: BloodGroup,
// }

  }
  render() {
    return (
      <div>
        <MuiThemeProvider>

          <div>
            <AppBar
              title="BloodBank" iconClassNameRight="muidocs-icon-navigation-expand-more" onTouchTap={this.handleToggle} >
              {/*<h1>Blood Blank </h1>*/}
              <Drawer open={this.state.open}>
                <Link to="/home"><MenuItem>Dashboard</MenuItem></Link>
                <Link to="/Required"><MenuItem>Available Blood</MenuItem></Link>
              </Drawer>
            </AppBar>
            <div className="form">
              <h4>Donor Details</h4>
              <form onSubmit={this.submit}>
                <TextField hintText="Country" ref="Country" /> <br />
                <br />
                <TextField hintText="city" ref="city" /> <br />
                <br />
                <TextField type="text" hintText="Area" ref="area" /> <br />
                <br />
                <TextField type="text" hintText="Gender" ref="gender" /> <br />
                <br />
                <TextField type="number" hintText="weight" ref="weight" /> <br />
                <br />
                <TextField type="number" hintText="age" ref="age" /> <br />
                <TextField type="number" hintText="mobilenumber" ref="mobnum" /> <br />
                <br />
                <RaisedButton type="submit" label="Submit" primary={true} />
              </form>

            </div>
          </div>
        </MuiThemeProvider>
      </div>




    )
  }
}

export default Donate;
