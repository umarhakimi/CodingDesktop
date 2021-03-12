import React, { Component } from 'react';
import '../../sass/style.scss';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route, NavLink, Link} from 'react-router-dom';
import ReactPage from "./reactPage.js";
import phpPage from "./phpPage.js";
import NavPage from "./NavPage";
import laravelimg from "./images/laravel.png";
import reactimg from "./images/react.png";
import phpimg from "./images/php.png";
import lgtimg from "./images/logout.png";
import Question from "./Question";
import Answer from "./Answer";
import Login from './Login';
import Register from './Register';
import Logout from './Logout';

export default class App extends Component {
    render() {
        return (
            <Router>
            <div className="wrapper">
                <nav className="d-flex align-items-start">
                {/* Big Navigation */}
                <div className="nav flex-column nav-pills me-3 justify-content-center pill" >
                    <NavLink to="/navigation" className="nav-link justify-content-center">
                        <img className="nav-image" src={laravelimg}/>
                    </NavLink>
                    <NavLink to="/react" className="nav-link justify-content-center">
                        <img className="nav-image" src={reactimg} />
                    </NavLink>
                    <NavLink to="/php" className="nav-link justify-content-center">
                        <img className="nav-image" src={phpimg} />
                    </NavLink>
                    <NavLink to="/logout" className="nav-link justify-content-center d-flex flex-row-reverse">
                        <img className="nav-image" src={lgtimg} />
                    </NavLink>
                </div>
                    <Route path="/react" component={ReactPage} />
                    <Route path="/php" component={phpPage} />
                    <Route path="/navigation" component={NavPage} />
                    <Route path="/laravelHelp" component={Question} />
                    <Route path="/question/:question_id" exact render = {props => <Answer{...props}/> }/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/logout" component={Logout}/>
                    {/* <Route component={NoMatch}/> */}
                </nav>

            </div>
            </Router>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
