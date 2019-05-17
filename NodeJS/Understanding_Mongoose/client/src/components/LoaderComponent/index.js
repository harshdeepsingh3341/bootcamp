import React, {Component} from 'react'
import {Styled_LoaderContainer} from "./styles";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

library.add(faCircleNotch);

class LoaderComponent extends Component {

    render() {
        const {
            message
        } = this.props;
        return (
            <Styled_LoaderContainer>
                <div>
                    <FontAwesomeIcon
                        icon={'circle-notch'}
                        size={'2x'}
                        color={'red'}
                        spin
                    />
                </div>
                <p>
                    {
                        message
                    }...
                </p>
            </Styled_LoaderContainer>
        );
    }

}

LoaderComponent.propTypes = {
    message: PropTypes.string.isRequired
};

const mapStateToProps = state => state.loader;

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(LoaderComponent)