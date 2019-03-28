import React, {Component} from 'react';
import './bookDetails.css';

class BookDetails extends Component{

    render() {
        let {
            name,
            author,
            cost,
            description,
            rating,
            thumbnail
        } = this.props.location.state.bookDetails;
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