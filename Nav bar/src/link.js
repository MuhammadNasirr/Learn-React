import React, { Component } from 'react';
import logo from './logo.svg';
import Menu from './App';
import './App.css';


class Link extends React.Component {
render() {
const url='/' 
+ this.props.label
.toLowerCase()
.trim()
.replace(' ', '-')
return React.createElement('div',
null,
React.createElement(
'a',
{href: url}, 
this.props.label
),
React.createElement('br') 
)
}
}

export default Link;