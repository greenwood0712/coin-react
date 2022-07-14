import React from "react";
import "./index.css";
import Nav from "react-bootstrap/Nav";

export default function Header(props) {
  return (
    <Nav className="justify-content-end" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">ÖZDUMAN Kripto</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={props.handleClick}>Watch list</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
