import React from 'react'
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';

class Menu extends React.Component {
    // handleSelect(eventKey) {
    //     event.preventDefault();
    //     alert(`selected ${eventKey}`);
    // }

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">Mega health</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        Link
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Link
                    </NavItem>
                    <NavItem eventKey={3} href="#">
                        Link
                    </NavItem>
                    <NavItem eventKey={4} href="#">
                        Link
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

// render(<Menu />);
export default Menu