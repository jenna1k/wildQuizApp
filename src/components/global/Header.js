import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink as RouterLink } from 'react-router-dom';
import './Header.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  closeNavbar() {
    if (this.state.isOpen === true) {
      this.toggle();
    }
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
              <NavItem>
                <RouterLink exact to="/home" onClick={this.closeNavbar}>Home</RouterLink>
              </NavItem>
              <NavItem>
                <RouterLink to="/how_to_play" onClick={this.closeNavbar}>How to play</RouterLink>
              </NavItem>
              <NavItem>
                <RouterLink to="/about" onClick={this.closeNavbar}>About</RouterLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
