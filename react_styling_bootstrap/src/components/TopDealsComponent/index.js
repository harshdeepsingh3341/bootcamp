import React, {Component} from 'react';
import {TopDealsContainer} from "./styles";
import imageJson from '../../images';
import TopDealsItem from '../TopDealsItem'

export default class TopDealsComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [...imageJson["deals-card-images"]]
        };
    }

    render() {
        const {data} = this.state;
        console.log(data);

        return (
            <TopDealsContainer>
                {
                    data.map((element) => (
                        <TopDealsItem
                            element={element}
                            key={element.id}
                        />
                    ))
                }
            </TopDealsContainer>
        )
    }

}