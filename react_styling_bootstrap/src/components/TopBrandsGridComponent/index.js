import React from 'react';
import {BrandName, GridContainer, GridImage, ImageCaption, Message} from "./styles";
import imageJson from '../../images';
import {Footer} from "../TopDealsItem/styles";

const TopBrandsGridComponent = (props) => {
    const data = imageJson["brands-focus-images"];
    return (
        <GridContainer>
            {
                data.map((element) => (
                    <GridImage
                        key={element.id}
                        image={element.image}
                    >
                        <ImageCaption>
                            <BrandName>
                                {element['brand-name']}
                            </BrandName>
                            <Message>
                                {element.message}
                            </Message>
                            <Footer>
                                + explore
                            </Footer>
                        </ImageCaption>
                    </GridImage>

                ))
            }
        </GridContainer>
    )
};

export default TopBrandsGridComponent;