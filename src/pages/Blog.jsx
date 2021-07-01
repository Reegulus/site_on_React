import React from "react";
import {Card, Col, Container, ListGroup, ListGroupItem, Media, Row} from "react-bootstrap";

export function Blog() {
    return (
        <Container>
            <Row>
                <Col md={"9"}>
                    <Media className={"m-5"}>
                        <img
                            width={150}
                            height={150}
                            className={"mr-3"}
                            src="https://lh3.googleusercontent.com/proxy/59THVzCw1G3q8DSXXcw2z6sBB_J30YyJBwHl64-jbU4Bw1y86o4RJr0yl08etnIU_-eFqDAnYTH6wht6g9ZNoTwse1HWIsRpLH3lo48"
                            alt="#"
                        />
                        <Media.Body>
                            <h5>Blog post</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur consequuntur
                                distinctio dolore doloribus, explicabo iste, itaque nam necessitatibus nesciunt,
                                perspiciatis possimus quaerat ratione repellendus soluta veniam voluptate. A, sint.
                            </p>
                        </Media.Body>
                    </Media>
                    <Media className={"m-5"}>
                        <img
                            width={150}
                            height={150}
                            className={"mr-3"}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYlEA6Vsz0fqBzwPvPnhncrBwAXizgKMXqSNQmLLctUOtagnhT9U2b9zWAAvFBo4jfAYA&usqp=CAU"
                            alt="#"
                        />
                        <Media.Body>
                            <h5>Blog post</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur consequuntur
                                distinctio dolore doloribus, explicabo iste, itaque nam necessitatibus nesciunt,
                                perspiciatis possimus quaerat ratione repellendus soluta veniam voluptate. A, sint.
                            </p>
                        </Media.Body>
                    </Media>
                    <Media className={"m-5"}>
                        <img
                            width={150}
                            height={150}
                            className={"mr-3"}
                            src="https://cdn-images-1.medium.com/max/800/1*Mn_mGNUGxK6gCROym_z8Bg.png"
                            alt="#"
                        />
                        <Media.Body>
                            <h5>Blog post</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur consequuntur
                                distinctio dolore doloribus, explicabo iste, itaque nam necessitatibus nesciunt,
                                perspiciatis possimus quaerat ratione repellendus soluta veniam voluptate. A, sint.
                            </p>
                        </Media.Body>
                    </Media>
                    <Media className={"m-5"}>
                        <img
                            width={150}
                            height={150}
                            className={"mr-3"}
                            src="https://st4.depositphotos.com/36966820/38692/v/600/depositphotos_386929472-stock-illustration-stylish-banner-react-vector-illustration.jpg"
                            alt="#"
                        />
                        <Media.Body>
                            <h5>Blog post</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur consequuntur
                                distinctio dolore doloribus, explicabo iste, itaque nam necessitatibus nesciunt,
                                perspiciatis possimus quaerat ratione repellendus soluta veniam voluptate. A, sint.
                            </p>
                        </Media.Body>
                    </Media>
                </Col>
                <Col md={"3"}>
                    <h5 className={"text-center mt-5"}>Categories</h5>
                    <Card>
                        <ListGroup variant={"flush"}>
                            <ListGroupItem>Html5</ListGroupItem>
                            <ListGroupItem>Css</ListGroupItem>
                            <ListGroupItem>JavaScript</ListGroupItem>
                            <ListGroupItem>React</ListGroupItem>
                            <ListGroupItem>Redux</ListGroupItem>
                        </ListGroup>
                    </Card>
                    <Card className={"mt-3"} bg={"light"}>
                        <Card.Body>
                            <Card.Title>Side widget</Card.Title>
                            <Card.Text>
                                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at doloribus
                                    earum est facere iusto minus modi nemo odit omnis pariatur quae quasi qui
                                    repellendus saepe sapiente temporibus, ut, vitae!
                                </div>
                                <div>Ab, alias autem corporis cupiditate deserunt ea earum id illum ipsa laborum neque
                                    odit officiis perspiciatis porro repellat unde vitae voluptate voluptatem. At
                                    deleniti facere magni nobis obcaecati rerum vitae.
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}