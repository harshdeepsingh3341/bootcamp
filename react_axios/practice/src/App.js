import React, {Component} from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {

    state = {
        posts: [],
        title: '',
        body: ''
    };

    componentDidMount() {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/posts'
            //responseType: 'stream' ---> doubt
        }).then((response) => this.setState({
            posts: [...response.data]
        }))
    }

    handleChange = (event) => {
        let {name, value} = event.target;
        this.setState({
            [name]: value
        })
    };

    postAxios = (event) => {
        let {title, body} = this.state;
        event.preventDefault();

        axios({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/posts',
            data: {
                title: title,
                body: body
            }
        }).then((response) => {

            this.setState({
                posts: [response.data, ...this.state.posts]
            })

        })

    };

    render() {
        let {posts, title, body} = this.state;
        return (
            <div className="App">

                <form action="#">
                    <input
                        type="text"
                        name="title"
                        id="title"
                        onChange={this.handleChange}
                        placeholder='Title'
                        value={title}/>

                    <input
                        type="text"
                        name="body"
                        id="body"
                        onChange={this.handleChange}
                        placeholder='Body'
                        value={body}/>

                    <input
                        type="submit"
                        value="Post"
                        onClick={this.postAxios}/>
                </form>

                {
                    posts.map((element) => (
                        <div key={element.id}>
                            <h3> {element.title} </h3>
                            <p> {element.body} </p>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default App;
