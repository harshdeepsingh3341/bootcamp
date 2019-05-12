import React, { Component } from 'react'
import {Styled_message, Styled_SuccessContainer} from "./styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

library.add(faCheckCircle);

export default class SuccessComponent extends Component{

    render() {
        const {
            message,
            displayTime
        } = this.props;
        return (
            <Styled_SuccessContainer
                displayTime={displayTime}
            >
                <div>
                    <FontAwesomeIcon
                        icon={"check-circle"}
                        color={'green'}
                        size={'3x'}
                    />
                </div>
                <Styled_message>
                    {
                        message
                    }
                </Styled_message>

            </Styled_SuccessContainer>
        );
    }

};

SuccessComponent.propTypes = {
    message: PropTypes.string.isRequired,
    displayTime: PropTypes.number.isRequired
};