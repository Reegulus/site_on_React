import React from "react";
import {CarouselBox} from "../components/CarouselBox";
import {Button, Card, CardDeck, CardImg, Container} from "react-bootstrap";

export function Home() {
    return (
        <>
            <CarouselBox/>
            <Container fluid="md">
                <h2 className={"text-center m-4"}>Our team</h2>
                <CardDeck>
                    <Card>
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
                    <Card>
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
                    <Card>
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
                </CardDeck>
            </Container>
        </>
    )
}