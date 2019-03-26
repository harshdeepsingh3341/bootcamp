import React, {Component} from 'react';
import './addDish.css'

class AddDish extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    
    handleChange = (event) => {
        let {name, value} = event.target;
        this.setState( {
            [name]: value
        })
    }
    
    render() {
        return (
            <div className="add-dish-container">
                <h2>Add a new Dish</h2>
                <form action="#">
                    <input type="text" name="name" id="name" onChange={this.handleChange} placeholder='Name'/>
                    <input type="number" name="cost" id="cost" placeholder='Cost' onChange={this.handleChange}/>
                    <input type="text" name="ingredients" id="ingredients" placeholder='Ingredients (comma(,) separated)' onChange={this.handleChange}/>
                    <input type="button" value="Add" onClick={() => this.props.callback(this.state)}/>
                </form>
            </div>
        )
    }
}

export default AddDish;