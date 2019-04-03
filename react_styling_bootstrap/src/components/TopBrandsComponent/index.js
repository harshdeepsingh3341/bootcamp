import React, {Component} from 'react';
import {Heading, TopBrandsContainer} from "./styles";
import TopBrandsGridComponent from "../TopBrandsGridComponent";

export default class TopBrandsComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TopBrandsContainer>
                <Heading>
                    brands in focus
                    <small>Show some brand love</small>
                </Heading>

                <TopBrandsGridComponent/>

            </TopBrandsContainer>
        )
    }

}