import React, {Component} from 'react'
import {Link} from "react-router-dom";
import './styles.css';

export default class Header extends Component{

    render(){
        return (
            <header className="header">
                <Link
                    to={'/login'}
                >
                    Login
                </Link>
            </header>
        )
    }

}