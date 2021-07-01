import React, {Component} from "react";
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import logo from "./logo/logo192.png"
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import {Home} from "../pages/Home";
import {About} from "../pages/About";
import {Contacts} from "../pages/Contacts";
import {Blog} from "../pages/Blog";

export function Header() {
    // render() {
    return (
        <>
        <Navbar collapseOnSelect expand={"md"} bg={"dark"} variant={"dark"}>
            <Container>
                <Navbar.Brand href={"/"}>
                    <img
                        src={logo}
                        height={"30"}
                        width={"30"}
                        className={"d-inline-block align-top"}
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={"responsive-navbar-nav"}/>
                <Navbar.Collapse id={"responsive-navbar-nav"}>
                    <Nav className={"mr-auto"}>
                        <Nav.Link href={"/home"}>Home</Nav.Link>
                        <Nav.Link href={"/about"}>About us</Nav.Link>
                        <Nav.Link href={"/contacts"}>Contacts</Nav.Link>
                        <Nav.Link href={"/blog"}>Blog</Nav.Link>
                    </Nav>
                    <Form inline={"inline"}>
                        <FormControl
                            type={"text"}
                            placeholder={"Search"}
                            className={"mr-auto"}
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