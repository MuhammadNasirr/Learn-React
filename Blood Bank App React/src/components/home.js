import React from 'react';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';




class Home extends React.Component {

    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
        this.state = { array: [] };
        this.state = { open: false };

    }
    handleToggle = () => this.setState({ open: !this.state.open });

    componentDidMount() {


        var userId = firebase.auth().currentUser.uid;

        firebase.database().ref('users/').on('value', (data) => {
            var obj = data.val();
            console.log(obj)//every thing is ok till this line data is retrieve
            let dbarray = [];
            for (var prop in obj)
                dbarray.push(obj[prop])
            console.log(dbarray);
            this.setState({
                array: dbarray
            })
        })
        firebase.database().ref('donors/').on('value', (data) => {
            var obj = data.val();
            console.log(obj)//every thing is ok till this line data is retrieve
            let dbarray = [];
            dbarray.push(Object.key(obj))
            console.log(dbarray);
            this.setState({
                array: dbarray
            })
        })
    }



    logout(ev) {
        ev.preventDefault();
        firebase.auth().signOut().then(function () {
            console.log('Sign-out successful.')

            browserHistory.push('/app')
        }, function (error) {
            // An error happened.
        })


    }
    render() {
        const style = {
            height: 100,
            width: 250,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
        };
        return (
            <div>
                <MuiThemeProvider>
                    <div>

                        <AppBar
                            title="BloodBank" iconClassNameRight="muidocs-icon-navigation-expand-more" onTouchTap={this.handleToggle} iconElementRight={<FlatButton onClick={this.logout} label="Logout" />}>
                            {/*<h1>Blood Blank </h1>*/}
                            <Drawer open={this.state.open}>
                                <Link to="/home"><MenuItem>Dashboard</MenuItem></Link>
                                <Link to="/Required"><MenuItem>Available Blood</MenuItem></Link>
                            </Drawer>
                        </AppBar>


               

                        <Paper className="paper" style={style} zDepth={3}><Link to="/donate"><RaisedButton label="Donate Blood" primary={true} /></Link></Paper>
                        <Paper className="paper" style={style} zDepth={3}> <Link to="/Required"><RaisedButton label="Required Blood" primary={true} width="50" /></Link></Paper>


                        {/*<div>
                    {this.state.array.map((val, i)  => {
                        return (<p key={i} style={{float:"center"}}>{val.blood}</p>)
                        

                    })}
                </div>*/}

                        <br />


                    </div>

                </MuiThemeProvider>
            </div>
        )
    }
}

export default Home; 