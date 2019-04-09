import React, {Component} from 'react';
import './dishes.css'

class Dishes extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        let {list_dishes} = this.props;
        // let str = list_dishes.map((element) => `<li>${element.name}</li>`);
        // console.log(str);
        // list_dishes[0].name = "CHANGE";
        // list_dishes[0].cost = 10001;
        
        return (
            <div>
                <ul>
                    {
                        list_dishes.map((element) => <Dish name={element.name} cost={element.cost} ingredients={element.ingredients}/>)
                    }

                </ul>
            </div>
        );
    }
}

class Dish extends Component{

    constructor(props) {
        super(props);
        this.state = {
            shown: false,
            showHide: 'show',
            moreDataStyle: {
                display: 'none'
            }
        }
    }

    showMoreDetails = () => {
        if(!this.state.shown){
            this.setState({
                shown: true,
                showHide: 'hide',
                moreDataStyle: {
                    display: 'flex'
                }
            });
        }
        else{
            this.setState({
                shown: false,
                showHide: 'show',
                moreDataStyle: {
                    display: 'none'
                }
            });
        }
    };

    render() {
        let {name, cost, ingredients} = this.props;
        let {showHide, moreDataStyle} = this.state;
        return (
            <li>
                <span className='placeholder'>
                    dish name
                </span>
                <span>
                    {name}
                </span>

                <button onClick={this.showMoreDetails}>{showHide} details</button>

                <div className='more-details' style={moreDataStyle}>
                    <span className='placeholder'>
                        cost
                    </span>
                    <span>
                        {cost}
                    </span>
                    <span className="placeholder">
                        ingredients
                    </span>
                    <span>
                        {ingredients.join(', ')}
                    </span>
                </div>


            </li>
        )
    }
}

export default Dishes;
