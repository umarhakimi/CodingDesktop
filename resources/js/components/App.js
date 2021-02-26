import React, { Component } from 'react';
import '../../sass/style.scss';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route, NavLink, Link} from 'react-router-dom';
import reactPage from "./reactPage.js";
import phpPage from "./phpPage.js";
import laravelPage from "./laravelPage";
import NavPage from "./NavPage";
import laravelHelp from "./laravelHelp";
import laravelimg from "./images/laravel.png";
import reactimg from "./images/react.png";
import phpimg from "./images/php.png";
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
                        <img class="nav-image" src={phpimg} />
                    </NavLink>
                </div>
                <Switch>
                    <Route path="/laravel" component={laravelPage} />
                    <Route path="/react" component={reactPage} />
                    <Route path="/php" component={phpPage} />
                    <Route path="/navigation" component={NavPage} />
                    <Route path="/laravelHelp" component={laravelHelp} />
                </Switch>
                </nav>

            </div>
            </Router>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
