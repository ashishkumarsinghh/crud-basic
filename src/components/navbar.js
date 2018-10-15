import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
export default class MyNavbar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Leaderboard</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              New Team
            </NavItem>
            <NavItem eventKey={2} href="#">
              New Match
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
