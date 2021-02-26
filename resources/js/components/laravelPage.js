import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route, NavLink, Link} from 'react-router-dom';
import NavPage from "./NavPage";

export default class laravelHelp extends Component {
    render() {
        return (

                <div class="tab-pane fade show active">
                    <div class="wrapper justify-content-center">
                        <nav class="col-1 navbar flex-column justify-content-center align-items-center" >
                            <Link to="/navigation" class="nav-item justify-content-center">Get Started</Link>
                            <a class="nav-item justify-content-center">Help</a>
                            <Link to="https://laravel.com/docs/8.x" class="nav-item justify-content-center">Documentation</Link>
                        </nav>
                        <div class="col-2 cont flex-fill">
                            <div class="row flex-fill align-items-center">
                                <div class="container-img col-2 ">
                                    <img src="laravel.png" alt="laravel" class=""/>
                                </div>
                                <div class=" col-1 flex-fill">
                                    <p class="para">Laravels</p>
                                </div>
                            </div>


                                <p class="header">testing</p>
                        </div>
                    </div>
                </div>




        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<laravelHelp />, document.getElementById('root'));
}
