import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, NavLink, Link} from 'react-router-dom';
import Reacter from "./reactPage.js";
import Php from "./phpPage.js";

export default class FrameworkSupport extends Component {
    render() {
        return (
            <Router>
            <div className="wrapper">
                <nav className="d-flex align-items-start">
                {/* Big Navigation */}
                <div className="nav flex-column nav-pills me-3 justify-content-center" >
                    <button className="nav-link active justify-content-center" componentClass={NavLink} to="/" >
                        <img className="nav-image" src="laravel.png" />
                    </button>
                    <button component={NavLink} to="./react.js">
                        <img className="nav-image" src="react.png" />
                    </button>
                    <button className="nav-link justify-content-center" componentClass={NavLink} to="../components/php.js">
                        <img className="nav-image" src="php.png" />
                    </button>
                    <Link to="../components/php.js" >google</Link>
                </div>
                <Switch>
                    <Route exact path="/" />
                    <Route path="./react.js" component={Reacter} />
                    <Route path="./php.js" component={Php} />

                </Switch>
                </nav>

            </div>
            </Router>
        );
    }
}

if (document.getElementById('FrameworkSupport')) {
    ReactDOM.render(<FrameworkSupport />, document.getElementById('FrameworkSupport'));
}
