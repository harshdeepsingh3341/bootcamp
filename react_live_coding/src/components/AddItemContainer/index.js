import React, {Component} from 'react'
import {Styled_AddButton, Styled_AddItemContainer, Styled_AddItemInput} from "./styles";
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'

library.add(faPlusSquare);

export default class AddItemContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            add: ''
        }
    }

    handleChange = ({target: {name, value}}) => {

        const {lengthRestriction} = this.props;

        (
            (lengthRestriction) ? (
                value.length <= lengthRestriction &&
                this.setState({
                    [name]: value
                })) : (
                this.setState({
                        [name]: value
                    }
                )
            )
        )
    };

    handleSubmit = () => {
        const {add} = this.state;
        const {addItemCallback, name} = this.props;
        (add.length !== 0) && (
            this.setState({
                    add: ''
                }, () => {
                    addItemCallback(add, name)
                }
            )
        )
    };

    render() {
        const {add} = this.state;
        const {placeholder} = this.props;
        return (
            <Styled_AddItemContainer>
                <Styled_AddItemInput
                    type='text'
                    placeholder={placeholder}
                    rows='5'
                    name={'add'}
                    onChange={this.handleChange}
                    value={add}
                />
                <Styled_AddButton
                    onClick={this.handleSubmit}
                >
                    <FontAwesomeIcon icon="plus-square"/>
                    <span>Add</span>
                </Styled_AddButton>
            </Styled_AddItemContainer>
        )
    }

};

AddItemContainer.defaultProps = {
    lengthRestriction: undefined,
    name: undefined
};
