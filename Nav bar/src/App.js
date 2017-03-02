import React, { Component } from 'react';
import './App.css';
import './index.css';


class Menu extends React.Component {
render() {
let menus = ['Home',
'About',
'Services',
'Portfolio',
'Contact us']
return <div>
{menus.map((v, i) => {
return <div key={i}><Link label={v}/></div>
})}
</div>
}}



class Link extends React.Component {
  render() {
    const url='/'
      + this.props.label
        .toLowerCase()
        .trim()
        .replace(' ', '-')
    return <div>
      <a href={url} role="button">
      {this.props.label}
      </a>
      <br/>
    </div>
  }
}

export default Menu; 
