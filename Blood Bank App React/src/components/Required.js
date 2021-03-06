import React from 'react';
import * as firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';

// import Details from 'More Details';

import AppBar from 'material-ui/AppBar';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';


class Required extends React.Component {
    constructor(props) {
        super(props);

        // this.logout = this.logout.bind(this);
        this.state = { array: [], open: false, value: 1 };
        // this.state = {open: false};


    }
    handleToggle = () => this.setState({ open: !this.state.open });
    handleChange = (event, index, value) => this.setState({ value });

    
    componentDidMount() {


        var userId = firebase.auth().currentUser.uid;

        firebase.database().ref('users/').on('value', (data) => {
            var obj = data.val();
            // console.log(obj)//every thing is ok till this line data is retrieve
            let dbarray = [];
            for (var prop in obj)
                dbarray.push(obj[prop])
            console.log(dbarray);
            this.setState({
                array: dbarray
            })
        })
        
        // firebase.database().ref('donors/').on('value', (data) => {
        //     var obj = data.val();
        //     // console.log(obj)//every thing is ok till this line data is retrieve
        //     let dbarray = [];
        //     for (var prop in obj)
        //         dbarray.push(obj[prop])
        //     console.log(dbarray);
        //     this.setState({
        //         array: dbarray
        //     })
        // })
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

    _search(e) {
        var needle = e.target.value.toLowerCase();
        if (!needle) {
            this.setState({ data: this._preSearchData });
            return;
        }
        var idx = e.target.dataset.idx;
        var searchdata = this._preSearchData.filter(function () {
            return (needle) > -1;
        });
        this.setState({ data: searchdata });
    }


    render() {
        const style = {
            margin: 12,
        };
          const styles = {
            customWidth: {
                width: 200,
                
            },
        };
        return (
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
                    <Link to="/MoreDetails"><RaisedButton label="More Details" secondary={true} style={style} onClick={this._search} /></Link>
                    <center>
                        <DropDownMenu value={this.state.value} className="style" onChange={this.handleChange} style={styles.customWidth}>
                            <MenuItem value={1} primaryText="O+" />
                            <MenuItem value={2} primaryText="O-" />
                            <MenuItem value={3} primaryText="A+" />
                            <MenuItem value={4} primaryText="A-" />
                            <MenuItem value={5} primaryText="B+" />
                            <MenuItem value={6} primaryText="B-" />
                            <MenuItem value={7} primaryText="AB+" />
                            <MenuItem value={8} primaryText="AB-" />
                        </DropDownMenu>
                    </center>
                    <br />
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>ID</TableHeaderColumn>
                                <TableHeaderColumn>Name</TableHeaderColumn>
                                <TableHeaderColumn>Status</TableHeaderColumn>
                                <TableHeaderColumn>Request</TableHeaderColumn>

                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {this.state.array.map((val, i) => {
                                return (
                                    <TableRow>
                                        <TableRowColumn key={i}>{i + 1}</TableRowColumn>
                                        <TableRowColumn key={i}>{val.username}</TableRowColumn>
                                        <TableRowColumn key={i}>{val.blood}</TableRowColumn>
                                        <RaisedButton label="Request" secondary={true} style={style} />
                                    </TableRow>

                                )


                            })}



                        </TableBody>
                    </Table>
                </div>
            </MuiThemeProvider >

        )
    }

}
export default Required;