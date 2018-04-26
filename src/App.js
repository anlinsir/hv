import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
}from 'react-router-dom'
import Loadable from 'react-loadable'
import './App.css';
import './font/font/iconfont.css'
/*********/
import Index from './pages/index'
import Login from './pages/login'
import Register from './pages/register'
import Detail from './pages/details'




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
          <Route path="/index" component={Index}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/detail/:id" component={Detail}></Route>



          <Redirect exact path="/" to="/index/index" />
           </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
