import React from 'react'
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavLink from 'react-router-dom/es/NavLink';
import classes from './Menu.css'
import Aux from '../../hoc/Aux';
import createHistory from 'history/createBrowserHistory'
import axios from 'axios';

class Menu extends React.Component {
  state = {
    userName: ''
  }

  componentDidMount () {
    this.getUserInfo()
  }

  componentDidUpdate () {
    this.getUserInfo()
  }

  getUserInfo () {
    if (this.isAuth() && !this.state.userName) {
      (async () => {
        let response = await axios.get('/user-info');
        this.setState({userName: response.data.name})
      })()
    }
  }

  logOut = () => {
    localStorage.setItem('token', '');
    const history = createHistory()
    this.setState({userName: ''})
    history.push('/login');
  }

  isAuth () {
    return !!localStorage.getItem('token')
  }

  render() {
    let profileInfo = this.isAuth() ?
      (
        <NavItem>
          <NavLink to={{pathname: '/profiles'}}>Profile info</NavLink>
        </NavItem>
      ) : '';
    let logInLogOut = this.isAuth() ?
      (
        <NavItem>
          <NavLink to={{pathname: '/login'}} onClick={this.logOut.bind(this)}>Log out</NavLink>
        </NavItem>
      ) :
      (
        <NavItem>
          <NavLink to={{pathname: '/login'}}>Log in</NavLink>
        </NavItem>
      )

      return (
        <Aux>
          <Navbar className={classes.Menu}>
              <Navbar.Header>
                  <Navbar.Brand>
                      <div>Mega health</div>
                  </Navbar.Brand>
              </Navbar.Header>
              <Nav>
                {profileInfo}
              </Nav>
              <Nav style={{float: 'right'}}>
                <NavItem>{this.state.userName}</NavItem>
                {logInLogOut}
              </Nav>
          </Navbar>
        </Aux>
      );
  }
}

// render(<Menu />);
export default Menu