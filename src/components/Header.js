import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" className="navbar-dark bg-dark">
          <NavbarBrand href="/">Wild Quiz</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavLink>
                <Link to="/home">Home</Link>
              </NavLink>
              <NavLink>
                <Link to="/about">About</Link>
              </NavLink>
              <NavLink>
                <Link to="/how_to_play">How to play</Link>
              </NavLink>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
