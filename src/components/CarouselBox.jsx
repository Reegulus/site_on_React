import React from "react";
import kruzhkaImg from "../assets/kruzhka.jpg"
import mashinaImg from "../assets/mashina.jpg"
import {Carousel} from "react-bootstrap";

export function CarouselBox() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className={"d-block w-100"}
                    src={kruzhkaImg}
                alt="forest"
                />
                <Carousel.Caption>
                    <h3>Forest image</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque delectus dolorum est
                        eum facilis harum incidunt inventore libero natus nisi obcaecati omnis provident quaerat qui,
                        tempora tempore tenetur vitae.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className={"d-block w-100"}
                    src={mashinaImg}
                alt="forest"
                />
                <Carousel.Caption>
                    <h3>Dark Forest image</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque delectus dolorum est
                        eum facilis harum incidunt inventore libero natus nisi obcaecati omnis provident quaerat qui,
                        tempora tempore tenetur vitae.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}