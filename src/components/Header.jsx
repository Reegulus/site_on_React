import React, {Component} from "react";
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import logo from "./logo/logo192.png"
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import {Home} from "../pages/Home";
import {About} from "../pages/About";
import {Contacts} from "../pages/Contacts";
import {Blog} from "../pages/Blog";
import FormCheckInput from "react-bootstrap/FormCheckInput";

export function Header() {
    return (
        <>
        <Navbar collapseOnSelect expand={"md"} bg={"dark"} variant={"dark"}>
            <Container>
                <Navbar.Brand href={"/"}>
                    {"React side "}
                    <img
                        src={logo}
                        height={"30"}
                        width={"30"}
                        className={"d-inline-block align-top"}
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={"navbarScroll"}/>
                <Navbar.Collapse id={"navbarScroll"}>
                    <Nav className={"mr-auto my-2 my-lg-0"}
                         style={{ maxHeight: '100px' }}
                         navbarScroll
                    >
                        <Nav.Link href={"/home"}>Home</Nav.Link>
                        <Nav.Link href={"/about"}>About us</Nav.Link>
                        <Nav.Link href={"/contacts"}>Contacts</Nav.Link>
                        <Nav.Link href={"/blog"}>Blog</Nav.Link>
                    </Nav>
                    <Form className={"d-flex    "}>
                        <FormControl
                            type={"text"}
                            placeholder={"Search"}
                            className={"mr-2"}
                        />
                        <Button variant={"outline-info"}>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
            <Router>
                <Switch>
                    <Route exact path={"/home"} component={Home}/>
                    <Route exact path={"/about"} component={About}/>
                    <Route exact path={"/contacts"} component={Contacts}/>
                    <Route exact path={"/blog"} component={Blog}/>
                </Switch>
            </Router>
        </>
    )
}