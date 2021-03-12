import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route, NavLink, Link} from 'react-router-dom';
import ReactPage from "./reactPage";
import laravelimg from "./images/laravel.png";
export default class NavPage extends Component {
    render() {
        return (
            <Router>

                <div className="tab-pane fade show active">
                    <div className="wrapper justify-content-center">
                        <nav className="col-1 navbar flex-column justify-content-center align-items-center" >
                            <a className="nav-item justify-content-center">Get Started</a>
                            <Link to="/laravelHelp" className="nav-item justify-content-center">Help</Link>
                            <Link to="https://laravel.com/docs/8.x" className="nav-item justify-content-center">Documentation</Link>
                        </nav>
                        <div className="col-2 cont flex-fill">
                            <div className="row BoxHeader flex-fill align-items-center">
                                <div className="container-img col-2 ">
                                    <img src={laravelimg} />
                                </div>
                                <div className=" col-1 flex-fill">
                                    <p className="para">Laravel</p>
                                </div>
                            </div>
                            <div className="row box-description">

                                <h1 className="header">Laravel</h1>
                                <p className="header">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius aliquam luctus felis sodales. Nibh nulla neque amet, ultrices sollicitudin. Praesent scelerisque eu gravida habitant scelerisque ut dui. Pulvinar vel lacus nisi, sed.

                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius aliquam luctus felis sodales. Nibh nulla neque amet, ultrices sollicitudin. Praesent scelerisque eu gravida habitant scelerisque ut dui. Pulvinar vel lacus nisi, sed.

                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius aliquam luctus felis sodales. Nibh nulla neque amet, ultrices sollicitudin. Praesent scelerisque eu gravida habitant scelerisque ut dui. Pulvinar vel lacus nisi, sed.

                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius aliquam luctus felis sodales. Nibh nulla neque amet, ultrices sollicitudin. Praesent scelerisque eu gravida habitant scelerisque ut dui. Pulvinar vel lacus nisi, sed.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </Router>
        );
    }
}

