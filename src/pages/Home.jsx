import React from "react";
import {CarouselBox} from "../components/CarouselBox";
import {Button, Card, CardDeck, CardImg, Col, Container, Row} from "react-bootstrap";

export function Home() {
    return (
        <>
            <CarouselBox/>
            <Container>
                <h2 className={"text-center m-4"}>Our team</h2>
                <CardDeck className={"m-4"}>
                    <Row>
                        <Col>
                            <Card border={"primary"}>
                                <CardImg
                                    variant={"top"}
                                    src={"https://images.wallpaperscraft.ru/image/noutbuk_chashka_ochki_rastenie_114948_1920x1080.jpg"}/>
                                <Card.Body>
                                    <Card.Title>Developers</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur corporis,
                                        deleniti deserunt dicta dolores excepturi exercitationem.
                                    </Card.Text>
                                    <Button variant={"primary"}>About team</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card border={"primary"}>
                                <CardImg
                                    variant={"top"}
                                    src={"https://images.wallpaperscraft.ru/image/noutbuk_ruki_kruzhka_211759_1920x1080.jpg"}/>
                                <Card.Body>
                                    <Card.Title>Developers</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur corporis,
                                        deleniti deserunt dicta dolores excepturi exercitationem.
                                    </Card.Text>
                                    <Button variant={"primary"}>About team</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card border={"primary"}>
                                <CardImg
                                    variant={"top"}
                                    src={"https://images.wallpaperscraft.ru/image/noutbuk_kod_programmirovanie_212332_300x168.jpg"}/>
                                <Card.Body>
                                    <Card.Title>Developers</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur corporis,
                                        deleniti deserunt dicta dolores excepturi exercitationem.
                                    </Card.Text>
                                    <Button variant={"primary"}>About team</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </CardDeck>
            </Container>
        </>
    )
}