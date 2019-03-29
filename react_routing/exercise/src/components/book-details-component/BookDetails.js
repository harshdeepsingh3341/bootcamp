import React, {Component} from 'react';
import './bookDetails.css';

import Books from '../../books'

class BookDetails extends Component{

    render() {
        
        console.log(this.props);
        
        
        const {
            name, 
            thumbnail,
            author,
            rating,
            cost,
            description
        } = Books.books[this.props.match.params.index]
        
        console.log(this.props);
        return (
            <div className="book-details">
                <span className="thumbnail">
                    <img src={thumbnail} alt=""/>
                </span>
                <div className="details">
                    <h2>
                        {name}
                        <span className="cost">
                            &#x20B9; {cost}
                        </span>
                    </h2>
                    <div className="author"> {author} </div>
                    <div className="rating">Rating: {rating} / 10</div>
                    <h3>About the Book</h3>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        )
    }

}

export default BookDetails;