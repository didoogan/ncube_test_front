import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Profiles from './containers/Profiles/Profiles';
import Profile from './containers/Profile/Profile'
import Switch from 'react-router-dom/es/Switch';
import Route from 'react-router-dom/es/Route';
import BrowserRouter from 'react-router-dom/es/BrowserRouter';
import Login from './containers/Login/Login';
import isAuth from './components/Auth/IsAuth'

class App extends Component {

  ifAuth = (Cmp) => {
    return !!localStorage.getItem('token') ? Cmp : Login
  }
  render() {
    return (
        <BrowserRouter>
          <div className='App'>
            <Menu />
            <Switch>
              <Route path='/profiles' component={isAuth(Profiles)} />
              <Route path='/profile/:id' component={Profile} />
              <Route path='/login' component={Login} />
              <Route render={() => <h1 style={{textAlign: 'center'}}>Not found</h1>}/>
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
