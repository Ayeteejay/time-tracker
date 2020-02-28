import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";

const Header = styled(Navbar)`
  font-family: Helvetica, sans-seriff;
  color: white;
  padding: 1.5em 2em;
  background-color: #0093ff;
  border-bottom: 1px solid white;
  a {
    font-size: 1em;
    color: white;
  }
`;
export default () => {
  return (
    <Header fixed="top">
      <Nav.Link href="#home">Time Tracker&trade;</Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link href="mailto:adam@ayeteejay.com">Contact</Nav.Link>
      </Navbar.Collapse>
    </Header>
  );
};
