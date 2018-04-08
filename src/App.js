import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Profiles from "./containers/Profiles/Profiles";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import BrowserRouter from "react-router-dom/es/BrowserRouter";

class App extends Component {

  render() {
    return (
        <BrowserRouter>
          <div  className="App">
            <Menu />
            <Switch>
              <Route path="/profiles" component={Profiles} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
