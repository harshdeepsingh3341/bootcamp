import React, {Component} from 'react';
import './booksList.css'
import {Link} from "react-router-dom";

class BooksList extends Component{
    constructor(props){
        super(props);
        this.state = {
            books: [
                {
                    name: 'the compound effect',
                    author: 'darren hardy',
                    cost: 1000,
                    description: `As publisher of SUCCESS magazine, author Darren Hardy has heard it all, seen it all, and tried most of it. This book reveals the core principles that drive success.

The compound effect is the strategy of reaping huge rewards from small, seemingly insignificant actions. You cannot improve something until you measure it. Always take 100 percent responsibility for everything that happens to you.

No gimmicks. No Hyperbole. No Magic Bullet. The Compound Effect is based on the principle that decisions shape your destiny. Little, everyday decisions will either take you to the life you desire or to disaster by default. Darren Hardy, publisher of Success Magazine, presents The Compound Effect, a distillation of the fundamental principles that have guided the most phenomenal achievements in business, relationships and beyond. This easy-to-use, step-by-step operating system allows you to multiply your success, chart your progress and achieve any desire. If you're serious about living an extraordinary life, use the power of The Compound Effect to create the success you want.
`,
                    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51Bz60iDotL._SX359_BO1,204,203,200_.jpg',
                    rating: 9
                },
                {
                    name: 'shoe dog',
                    author: 'phil knight',
                    cost: 500,
                    description: 'Shoe Dog is a memoir by Nike co-founder Phil Knight. The memoir chronicles the history of Nike from its early struggles to its evolution into one of the world’s most recognized and profitable companies. ',
                    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/51hR57dIpjL._SX426_BO1,204,203,200_.jpg',
                    rating: 5
                },
                {
                    name: 'factfulness',
                    author: 'hans rosling',
                    cost: 199,
                    description: 'Factfulness: Ten Reasons We\'re Wrong About the World – and Why Things Are Better Than You Think is a 2018 book by Hans Rosling. In his book, Rosling suggests the vast majority of human beings are wrong about the state of the world.',
                    thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/41Y8VNSVkaL._SX321_BO1,204,203,200_.jpg',
                    rating: 8
                }
            ]
        }
    }

    render() {
        let {books} = this.state;
        return (
            <div className="books-list-container">
                {
                    books.map((element, index) => <Book bookDetails={element} bookIndex={index} />)
                }
            </div>
        )

    }
}

const Book = (props) => {
    let {bookDetails, bookDetails: {name, author, cost, description, rating, thumbnail}, bookIndex} = props;
    
    return (
        <Link to={{pathname:`/book-details`, state: {bookDetails: {...bookDetails}}}} style={{color: 'unset', textDecoration: 'none'}} className='link'>
            <div className="book">
                <span className="thumbnail">
                    <img src={thumbnail} alt={name} />
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
