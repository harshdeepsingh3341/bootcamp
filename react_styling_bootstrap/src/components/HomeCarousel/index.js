import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";
import {Image} from "./styles";


export default class HomeCarousel extends Component {

    render() {
        return (
            <Carousel
                style={{padding: '10px 0'}}
                fade={true}
                interval={1000}
                indicators={false}
            >
                <Carousel.Item>
                    <Image
                        src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/31/e27302d6-a2c4-4fd3-a2b1-c3bd92a8b2401554050196883-ESPRIT_Desktop_Banner.jpg"
                        alt="Carousel Image 1"/>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/30/e5a955ac-e224-4b83-aaac-e86674ddb7471553959219090-Zaveri_Desktop_Banner.jpg"
                        alt="Carousel Image 1"/>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/30/96cbfd92-10c4-4d6a-bf87-0f391364e3c61553959219167-Nayo_Desktop_Banner.jpg"
                        alt="Carousel Image 1"/>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/30/120da81b-bedc-4ce2-ac2e-fe5fb757dec71553959219064-ESPRIT_Desktop_Banner.jpg"
                        alt="Carousel Image 1"/>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/31/506f5b20-baf7-4106-9e69-c17de09cfab81554023104632-Desk2.gif"
                        alt="Carousel Image 1"/>
                </Carousel.Item>

            </Carousel>
        )
    }

}