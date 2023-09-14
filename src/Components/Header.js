import React, { Component } from "react";
import {
  Form,
  FormControl,
  Navbar,
  Nav,
  Container,
  Button,
} from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo192.png";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          sticky="top"
          collapseOnSelect
          expand="md"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand href="#">
              <img
                src={logo}
                height="30"
                weight="30"
                className="d-inline-block align-top"
                alt="logo"
              />
              React site
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contacts">Contacts</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Router>
          <Routes>
            <Route exact path="/" element = {<Home/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
            <Route path='/blog' element={<Blog/>}/>
          </Routes>
        </Router>
      </>
    );
  }
}
