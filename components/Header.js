import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { Button } from "semantic-ui-react";

export default () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Kickstarter</Navbar.Brand>
        <Nav
          className="mr-auto"
          style={{ display: "flex", alignSelf: "right" }}
        ></Nav>
        <Nav.Link href="/campaigns/new">
          <Button floated="right" icon="add circle" color="facebook" />
        </Nav.Link>
      </Navbar>
    </div>
  );
};
