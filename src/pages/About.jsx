import React from "react";
import {Col, Container, Nav, Row, TabContainer, TabContent, TabPane, Tab} from "react-bootstrap";

export function About() {
    return (
        <Container>
            <TabContainer id={"ledt-tabs-example"} defaultActiveKey={"first"}>
                <Row>
                    <Col sm={3}>
                        <Nav variant={"pills"} className={"flex-column mt-2"}>
                            <Nav.Item>
                                <Nav.Link eventKey={"first"}>Desing</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey={"second"}>Team</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey={"third"}>Programming</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey={"fourth"}>Framework</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey={"firth"}>Libraries</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <TabContent className={"mt-3"}>
                            <TabPane eventKey={"first"}>
                                <img src="https://ichigarev.ru/wp-content/uploads/2018/02/envato-elements.jpg"
                                     alt=""/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, in, minus. Cum
                                    eligendi et iusto, laudantium molestiae officia quae quos sequi. Adipisci at
                                    incidunt magni minus nesciunt soluta veniam voluptates.</p>
                            </TabPane>
                            <TabPane eventKey={"second"}>
                                <img src="https://www.andornet.ad/blog/wp-content/uploads/2018/05/laptop-3373638_960_720.jpg"
                                     alt=""/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, in, minus. Cum
                                    eligendi et iusto, laudantium molestiae officia quae quos sequi. Adipisci at
                                    incidunt magni minus nesciunt soluta veniam voluptates.</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, in, minus. Cum
                                    eligendi et iusto, laudantium molestiae officia quae quos sequi. Adipisci at
                                    incidunt magni minus nesciunt soluta veniam voluptates.</p>
                            </TabPane>
                            <TabPane eventKey={"third"}>
                                <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/141855587/original/ea5d41ee7ec15685bcf7e6cb015d3b918e58a2b7/do-responsive-front-end-web-development-in-react-nodejs-html-css-bootstrap.jpg"
                                     alt=""/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, in, minus. Cum
                                    eligendi et iusto, laudantium molestiae officia quae quos sequi. Adipisci at
                                    incidunt magni minus nesciunt soluta veniam voluptates.</p>
                            </TabPane>
                            <TabPane eventKey={"fourth"}>
                                <img src="https://miro.medium.com/max/900/1*aWnRHAukJGaB2jVFY5iZCg.jpeg"
                                     alt=""/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, in, minus. Cum
                                    eligendi et iusto, laudantium molestiae officia quae quos sequi. Adipisci at
                                    incidunt magni minus nesciunt soluta veniam voluptates.</p>
                            </TabPane>
                            <TabPane eventKey={"firth"}>
                                <img src="https://www.digital4design.com/wp-content/uploads/2019/02/Javascript-frameworks-and-Libraries-Digital4design.png"
                                     alt=""/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, in, minus. Cum
                                    eligendi et iusto, laudantium molestiae officia quae quos sequi. Adipisci at
                                    incidunt magni minus nesciunt soluta veniam voluptates.</p>
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </TabContainer>
        </Container>
    )
}