import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RouterLink } from 'react-router-dom';
import './Header.css';

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
        <Navbar expand="md" className="navbar-dark">
          <NavbarBrand href="/">
            <img src="https://content.screencast.com/users/aliashkevich/folders/wild_quiz/media/47c98acf-8936-4057-b0a6-93a5ed670f92/logo.png"
              alt="logo"
              className="logo" />
            <span>Wild Quiz</span>
          </NavbarBrand>
          <NavbarToggler className="custom-toggler" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavLink>
                <NavItem>
                  <RouterLink exact to="/home">Home</RouterLink>
                </NavItem>
              </NavLink>
              <NavLink>
                <NavItem>
                  <RouterLink to="/how_to_play">How to play</RouterLink>
                </NavItem>
              </NavLink>
              <NavLink>
                <NavItem><RouterLink to="/about">About</RouterLink>
                </NavItem>
              </NavLink>
            </Nav>
          </Collapse>
        </Navbar>
      </div >
    );
  }
}
