import React from "react";
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import logo from "./logo/logo192.png"

export function Header() {
    return (
        <Navbar collapseOnSelect expand={"md"} bg={"dark"} variant={"dark"}>
            <Container>
                <Navbar.brand href={"/"}>
                    <img src={logo}
                         alt="Logo"
                         width={"30"}
                         height={"30"}
                         className={"d-inline-block align-top"}
                    />
                </Navbar.brand>
                {/*<Navbar.Toggle aria-controls={"responsive-navbar-nav"}/>*/}
                {/*<Navbar.Collapse id={"responsive-navbar-nav"}>*/}
                {/*    <Nav className={"mr-auto"}>*/}
                {/*        <Nav.Link href={"/"}>Home</Nav.Link>*/}
                {/*        <Nav.Link href={"/"}>About us</Nav.Link>*/}
                {/*        <Nav.Link href={"/"}>Contacts</Nav.Link>*/}
                {/*        <Nav.Link href={"/"}>Blog</Nav.Link>*/}
                {/*    </Nav>*/}
                {/*    <Form inline>*/}
                {/*        <FormControl*/}
                {/*            type={"text"}*/}
                {/*            placeholder={"Search"}*/}
                {/*            className={"mr-sm-2"}*/}
                {/*        />*/}
                {/*        <Button variant={"outline-info"}>Search</Button>*/}
                {/*    </Form>*/}
                {/*</Navbar.Collapse>*/}
            </Container>
        </Navbar>
    )

}