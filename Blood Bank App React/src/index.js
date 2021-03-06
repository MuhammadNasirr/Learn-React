import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Signup from './components/signup';
import './index.css';
import Login from './components/login';
import Donate from './components/donate';
import Details from './components/More Details';
import Required from './components/Required';
import Home from './components/home'
import { Router, Route, browserHistory} from 'react-router';

// import injectTapEventPlugin from "react-tap-event-plugin";



ReactDOM.render(
  <Router history={browserHistory}>
        <Route path="/" component={ App}>       
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login} />
            </Route>
            <Route path="/app" component={App}/>
            <Route path="/donate" component={Donate}/>
            <Route path="/home" component={Home} />
            <Route path="/Required" component={Required} />
            <Route path="/MoreDetails" component={Details} />
         
       
    </Router>,

  

  document.getElementById('root')
);
