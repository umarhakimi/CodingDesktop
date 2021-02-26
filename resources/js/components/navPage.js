import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route, NavLink, Link} from 'react-router-dom';
import reactPage from "./reactPage";
import laravelimg from "./images/laravel.png";
export default class NavPage extends Component {
    render() {
        return (
            <Router>

                <div class="tab-pane fade show active">
                    <div class="wrapper justify-content-center">
                        <nav class="col-1 navbar flex-column justify-content-center align-items-center" >
                            <a class="nav-item justify-content-center">Get Started</a>
                            <Link to="/laravelHelp" class="nav-item justify-content-center">Help</Link>
                            <Link to="https://laravel.com/docs/8.x" class="nav-item justify-content-center">Documentation</Link>
                        </nav>
                        <div class="col-2 cont flex-fill">
                            <div class="row BoxHeader flex-fill align-items-center">
                                <div class="container-img col-2 ">
                                    <img src={laravelimg} />
                                </div>
                                <div class=" col-1 flex-fill">
                                    <p class="para">Laravel</p>
                                </div>
                            </div>
                            <div class="row box-description">

                                <h1 class="header">Laravel</h1>
                                <p class="header">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius aliquam luctus felis sodales. Nibh nulla neque amet, ultrices sollicitudin. Praesent scelerisque eu gravida habitant scelerisque ut dui. Pulvinar vel lacus nisi, sed.

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

if (document.getElementById('root')) {
    ReactDOM.render(<NavPage />, document.getElementById('root'));
}
