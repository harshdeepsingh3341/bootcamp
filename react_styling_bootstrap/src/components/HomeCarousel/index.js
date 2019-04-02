import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";
import {Image} from "./styles";
import ImagesJson from '../../images'


export default class HomeCarousel extends Component {

    render() {

        const carouselImages = ImagesJson["carousel-images"];

        return (
            <Carousel
                style={{padding: '10px 0'}}
                fade={true}
                interval={3000}
                controls={false}
            >
                {
                    carouselImages.map((element, index) => (
                        <Carousel.Item key={index + 1}>
                            <Image
                                src={element}
                                alt={`Carousel Image ${index + 1}`}
                            />
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        )
    }

}