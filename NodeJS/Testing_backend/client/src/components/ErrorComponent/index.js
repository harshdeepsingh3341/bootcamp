import React, { Component } from 'react'
import {Styled_ErrorContainer, Styled_ErrorMessage, Styled_ErrorStack} from "./styles";
import PropTypes from 'prop-types';

export default class ErrorComponent extends Component{

    render() {
        const {
            error
        } = this.props;
        console.log(error);
        
        return (
            <Styled_ErrorContainer>
                <Styled_ErrorMessage>
                    {
                        error.message
                    }
                </Styled_ErrorMessage>

                <Styled_ErrorStack>
                    {
                        error.stack
                    }
                </Styled_ErrorStack>
            </Styled_ErrorContainer>
        );
    }

}

ErrorComponent.propTypes = {
    error: PropTypes.object.isRequired
};