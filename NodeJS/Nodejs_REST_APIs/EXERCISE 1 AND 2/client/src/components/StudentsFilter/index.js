import React, {Component} from 'react'
import axios from 'axios'
import {Styled_FilterContainer, Styled_Select} from "./styles";
import PropTypes from 'prop-types';

export default class StudentsFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            response: {},
            selectedBatch: props.selectedBatch
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log(props.selectedBatch);
        
        return {selectedBatch: props.selectedBatch}
    }

    render() {
        console.log(this.state);
        
        const {response: {data: batch}, selectedBatch} = this.state;
        const {filterCallback} = this.props;
        console.log(batch && Object.keys(batch.data));

        const options = batch && Object.keys(batch.data).map(element => (
            <option
                value={element}
            >
                {element} ({batch.data[element]})
            </option>
        ));
        return (
            <Styled_FilterContainer>
                <Styled_Select
                    value={selectedBatch}
                    onChange={filterCallback}
                >
                    <option value="ALL">
                        All Students
                    </option>
                    {
                        options
                    }
                </Styled_Select>
            </Styled_FilterContainer>
        );
    }


    componentDidMount() {
        axios({
            url: 'http://localhost:8000/branches',
            method: "GET"
        }).then(data => {
            this.setState({
                    response: data
                }, () => console.log(this.state)
            )
        })
    }

}

StudentsFilter.propTypes = {
    selectedBatch: PropTypes.string.isRequired,
    filterCallback: PropTypes.func.isRequired
}