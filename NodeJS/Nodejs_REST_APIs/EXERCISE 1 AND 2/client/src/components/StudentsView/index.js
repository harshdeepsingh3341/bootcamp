import React, {Component} from 'react'
import {Styled_Error, Styled_StudentsContainer, Styled_StudentsTable} from "./styles";
import axios from 'axios';
import PropTypes from 'prop-types'

export default class StudentsView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            response: {},
            ...props
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log("gdsfp", state);

        return props;
    }

    render() {
        const {response: {data: students}} = this.state;
        console.log(students);

        const students_view = (students && students.status === 200) && students.data.map(element => (
            <tr
                key={element.id}
            >
                <td>
                    {element.id}
                </td>
                <td>
                    {`${element.name.firstName} ${element.name.lastName}`}
                </td>
                <td>
                    {element.email}
                </td>
                <td>
                    {element.branchName}
                </td>
            </tr>
        ));

        return (
            <Styled_StudentsContainer>
                {
                    students && (
                        students.status !== 200 ? (
                            <Styled_Error>
                                {students.message}
                            </Styled_Error>
                        ) : (
                            <Styled_StudentsTable>
                                <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Branch</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    students_view
                                }
                                </tbody>
                            </Styled_StudentsTable>
                        )
                    )
                }
            </Styled_StudentsContainer>
        )
    }

    componentDidMount() {
        axios({
            url: 'http://localhost:8000/students',
            method: 'GET'
        }).then(data => {
            this.setState({
                response: data
            })
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("update");

        if (this.state.searchInput !== prevState.searchInput) {
            console.log('search', this.state.searchInput, prevState.searchInput);
            axios({
                url: `http://localhost:8000/students?q=${this.state.searchInput}`,
                method: "GET"
            }).then(data => {
                console.log(data);

                this.setState({
                    response: data
                })
            })

        } else if (this.state.selectedBatch !== prevState.selectedBatch) {
            axios({
                url: `http://localhost:8000/students?b=${this.state.selectedBatch}`,
                method: "GET"
            }).then(data => {
                console.log(data);

                this.setState({
                    response: data
                })
            })

        }
    }

}

StudentsView.propTypes = {
    searchInput: PropTypes.string.isRequired,
    selectedBatch: PropTypes.string.isRequired
}