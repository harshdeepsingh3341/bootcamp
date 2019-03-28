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
        if(event.keyCode === 13 && !this.state.error.isError){
            document.querySelector('.addItem button').click();
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
                <input type="text" name="addItem" id="addItem" placeholder='Enter item and price separated by a - (hyphen)' onKeyUp={this.addNewItem} onChange={this.handleChange} style={this.state.error.style}/>

                <button onClick={() => addItemCallback(this.state.item)}/>
            </div>
        )
    }
}
export default AddItem;