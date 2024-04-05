'use client'

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

function MultiDropdownExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            <NavDropdown title="Nested Dropdown" id="nestedDropdown">
              <NavDropdown.Item href="#action6">Nested Action</NavDropdown.Item>
              <NavDropdown.Item href="#action7">Another Nested Action</NavDropdown.Item>
            </NavDropdown>
          </NavDropdown>
          <Nav.Link href="#" disabled>Disabled Link</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="#search">Search</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MultiDropdownExample;
