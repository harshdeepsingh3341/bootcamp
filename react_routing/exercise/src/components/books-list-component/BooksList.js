import React, {Component} from 'react';
import './booksList.css'
import {Link} from "react-router-dom"
import Books from '../../books'

class BooksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [...Books.books]
        }
    }

    render() {
        let {books} = this.state;
        return (
            <div className="books-list-container">
                {
                    books.map((element, index) => <Book bookDetails={element} bookIndex={index}/>)
                }
            </div>
        )

    }
}

const Book = (props) => {
    let {bookDetails, bookDetails: {name, author, cost, description, rating, thumbnail}, bookIndex} = props;

    return (
        <Link to={`/book-details/${bookIndex}`} style={{color: 'unset', textDecoration: 'none'}} className='link'>
            <div className="book">
                <span className="thumbnail">
                    <img src={thumbnail} alt={name}/>
                </span>

                <span className="name">
                    {name}
                </span>

                <span className="author">
                    by - {author}
                </span>
            </div>
        </Link>
    )
};

export default BooksList;
