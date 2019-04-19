import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import StudentSearch from "./components/StudentSearch";
import StudentsView from "./components/StudentsView";
import StudentsFilter from "./components/StudentsFilter";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            selectedBatch: 'ALL'
        }
    }

    searchStudents = ({target:{value}}) => {
        this.setState({
            searchInput: value
        })

    };

    filterStudents = ({target:{value}}) => {
        this.setState({
            selectedBatch: value
        })
    };

    render() {
        const {searchInput, selectedBatch} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Students
                    </p>
                </header>
                <section className={'App-section'}>
                    <StudentSearch
                        searchCallback={this.searchStudents}
                        searchInput={searchInput}
                    />

                    <StudentsFilter
                        selectedBatch={selectedBatch}
                        filterCallback={this.filterStudents}
                    />

                    <StudentsView
                        searchInput={searchInput}
                        selectedBatch={selectedBatch}
                    />
                </section>
            </div>
        );
    }
}

export default App;
