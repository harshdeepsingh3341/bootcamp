import React, {Component} from 'react';
import './addItem.css';

class AddItem extends Component{

    constructor(props){
        super(props);
        this.state = {
            error: {
                isError: false,
                style: {border:'thin solid #ccc'}
            }
        };
    }

    addNewItem = (event) => {
        event.preventDefault();
        if(!this.state.error.isError){
            this.props.addItemCallback(this.state.item)
        }
    };

    handleChange = (event) => {

        if( /\D+[-]\d+$/gm.test(event.target.value) ) {
            let state = this.state;
            this.setState({
                item: event.target.value,
                error: {
                    isError: false,
                    style: {border:'thin solid #ccc'}
                }
            });

        }
        else{
            this.setState({
                error: {
                    isError: true,
                    style: {border:'thin solid red'}
                }
            })
        }
    };

    render(){
        let {addItemCallback} = this.props;
        return (
            <div className="addItem">
                <form onSubmit={this.addNewItem}>
                    <input
                        type="text"
                        name="addItem"
                        id="addItem"
                        placeholder='Enter item and price separated by a - (hyphen)'
                        onChange={this.handleChange}
                        style={this.state.error.style}
                    />
                </form>
            </div>
        )
    }
}
export default AddItem;