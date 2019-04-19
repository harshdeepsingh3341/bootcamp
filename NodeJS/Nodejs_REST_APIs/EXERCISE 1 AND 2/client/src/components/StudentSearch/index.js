import React, {Component} from 'react'
import {Styled_SearchBar, Styled_SearchContainer} from "./styles";
import PropTypes from 'prop-types';

export default class StudentSearch extends Component {
    constructor(props) {
        super(props);
        this.state = props.searchInput;
    }

    static getDerivedStateFromProps(props, state) {
        return props.searchInput;
    }

    render() {
        const {searchInput} = this.state;
        const {searchCallback} = this.props;
        return (
            <Styled_SearchContainer>
                <Styled_SearchBar
                    type={'search'}
                    placeholder={'Search Students'}
                    onChange={searchCallback}
                    name={'search'}
                    id={'search'}
                    value={searchInput}
                />
            </Styled_SearchContainer>
        )
    }

}

StudentSearch.propTypes = {
    searchCallback: PropTypes.func.isRequired,
    searchInput: PropTypes.string.isRequired
};