import React, {Component} from 'react';
import './addItem.css';

class AddItem extends Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    addNewItem = (event) => {
        if(event.keyCode === 13){
            document.querySelector('.addItem button').click();
        }
    };

    handleChange = (event) => {
        this.setState({
            item: event.target.value
        })
    };

    render(){
        let {addItemCallback} = this.props;
        return (
            <div className="addItem">
                <input type="text" name="addItem" id="addItem" placeholder='Enter item and price separated by a - (hyphen)' onKeyUp={this.addNewItem} onChange={this.handleChange}/>

                <button onClick={() => addItemCallback(this.state.item)}></button>
            </div>
        )
    }
}
export default AddItem;