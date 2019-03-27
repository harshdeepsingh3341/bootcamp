import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom'

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>

                    <Route></Route>
                    <Route path={'/'} component={Index}/>

                    <Route path={'/home'} component={Home}/>
                    <Route path={'/home2'} render={() => <div>home 2 component</div>}/>
                    <Route path={'/home3'} render={(props) => <Home {...props} name='hd'/>}/>
                    <Route path={'/home4/:id/:name'} component={Home}/>
                    <PrivateRoute path={'/user'} component={User} name='Harshdeep Singh'/>
                </Router>

            </div>
        );
    }
}

const Index = (props) => (
    <div>
        <ul>
            <li> <Link to={'/home'}>Home</Link></li>
            <li> <Link to={'/home2'}> Home 2 </Link></li>
            <li> <Link to={'/home3'}> Home 3 </Link></li>
            <li> <Link to={'/home4/hd/harshdeep'}>Home 4</Link></li>
            <li> <Link to={'/user'}> User </Link></li>
        </ul>
    </div>
)

const Home = (props) => {
    console.log(props);
    
    return (<div>
        home component some props {props.name}
    </div>)
}

const User = (props) => <div>user <b>{props.name}</b> </div>


const PrivateRoute = ({component: Component, name, ...rest}) => {
    let isAuth = !true;
    console.log(rest);
    
    return (
        <Route {...rest} render={() => (isAuth?<Component name={name}/>: <Redirect to={'/home'}/>)} />
    )
};

export default App;

