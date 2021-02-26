import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route, NavLink, Link} from 'react-router-dom';
import laravelimg from "./images/laravel.png";
import SlideDrawer from "./SlideDrawer/SlideDrawer"
import {Drawer } from 'rsuite';
const laravelHelp =()=>{
    const [drawer,setDrawer] = useState(false);


        return (
            <Router>
                <div class="tab-pane fade show active">
                    <div class="wrapper justify-content-center">
                        <nav class="col-1 navbar flex-column justify-content-center align-items-center" >
                            <Link to="/navigation" class="nav-item justify-content-center" >Get Started</Link>
                            <a class="nav-item justify-content-center">Help</a>
                            <Link to="https://laravel.com/docs/8.x" class="nav-item justify-content-center">Documentation</Link>
                        </nav>
                        <div class="col-2 cont flex-fill">
                            <div class="row BoxHeader flex-fill align-items-center">
                                <div class="container-img col-2 ">
                                    <img src={laravelimg} alt="laravel" class=""/>
                                </div>
                                <div class=" col-1 ">
                                    <p class="para">Laravel</p>
                                </div>
                            </div>
                            <div class="wrapper2 row">

                                <div class="col-6 questionBox scrollable">
                                    <h1 class='header2'>All Questions</h1>
                                        <div class="questionContainer">
                                            <div class="panel ">
                                                <Link onClick={()=>setDrawer(true)} class="title" style={{ textDecoration: 'none' }}>MongoDB 3.2 to 3.6 Upgradation Performance/Slowness issue</Link>
                                                    <p class="question" >
                                                    We have upgraded the MongoDB server from 3.2 to 3.6. The scenario is like previously we were having 3.4 setup installed on Server DB01 ...
                                                    </p>
                                            </div>
                                            <div class="panel">
                                                <Link to=""class="title">Safely retrieving a value from a route</Link>
                                                    <p class="question">
                                                    In my Angular application I have updated some URLs in my project from previously using query string elements like this: http://www.whatever.com/products?productName= ...
                                                    </p>
                                            </div>
                                            <div class="panel">
                                                <Link to=""class="title">Convert python opencv and numpy solution to js code</Link>
                                                    <p class="question">
                                                    I need a solution to detect t-shirt corners on an image. I found exactly what I want, but it is written in python, that I have never been dealing with. Also, honestly I am not...
                                                    </p>
                                            </div>
                                            <div class="panel">
                                                <Link to="" class="title">Pattern to replace elements on each hover with css</Link>
                                                    <p class="question">
                                                    I want when hovering over an element, it will be replaced with a new element value, as in the video below. demo video I now try like this, but it's still difficult to change elements when hovering on ...
                                                    </p>
                                            </div>
                                            <div class="panel">
                                                <Link to="" class="title">Pattern to replace elements on each hover with css</Link>
                                                    <p class="question">
                                                    I want when hovering over an element, it will be replaced with a new element value, as in the video below. demo video I now try like this, but it's still difficult to change elements when hovering on ...
                                                    </p>
                                            </div>
                                            <div class="panel">
                                                <Link to="" class="title">Pattern to replace elements on each hover with css</Link>
                                                    <p class="question">
                                                    I want when hovering over an element, it will be replaced with a new element value, as in the video below. demo video I now try like this, but it's still difficult to change elements when hovering on ...
                                                    </p>
                                            </div>
                                            <div class="panel">
                                                <Link to="" class="title">Pattern to replace elements on each hover with jss</Link>
                                                    <p class="question">
                                                    I want when hovering over an element, it will be replaced with a new element value, as in the video below. demo video I now try like this, but it's still difficult to change elements when hovering on ...
                                                    </p>
                                            </div>
                                            <div class="panel">
                                                <Link to="" class="title">Pattern to replace elements on each hover with css</Link>
                                                    <p class="question">
                                                    I want when hovering over an element, it will be replaced with a new element value, as in the video below. demo video I now try like this, but it's still difficult to change elements when hovering on ...
                                                    </p>
                                            </div>
                                            <div class="panel">
                                                <Link to="" class="title">Pattern to replace elements on each hover with css</Link>
                                                    <p class="question">
                                                    I want when hovering over an element, it will be replaced with a new element value, as in the video below. demo video I now try like this, but it's still difficult to change elements when hovering on ...
                                                    </p>
                                            </div>
                                            <div class="panel">
                                                <Link to="" class="title">Pattern to replace elements on each hover with css</Link>
                                                    <p class="question">
                                                    I want when hovering over an element, it will be replaced with a new element value, as in the video below. demo video I now try like this, but it's still difficult to change elements when hovering on ...
                                                    </p>
                                            </div>
                                            <div class="panel">
                                                <Link to="" class="title">Pattern to replace elements on each hover with css</Link>
                                                    <p class="question">
                                                    I want when hovering over an element, it will be replaced with a new element value, as in the video below. demo video I now try like this, but it's still difficult to change elements when hovering on ...
                                                    </p>
                                            </div>
                                            <div class="panel">
                                                <Link to="" class="title ">Pattern to replace elements on each hover with jss</Link>
                                                    <p class="question">
                                                    I want when hovering over an element, it will be replaced with a new element value, as in the video below. demo video I now try like this, but it's still difficult to change elements when hovering on ...
                                                    </p>
                                            </div>
                                        </div>

                                </div>
                                <div class="col-6 ">
                                        <SlideDrawer >



                                </div>

                            </div>
                            {/* wrapper */}
                        </div>
                    </div>
                </div>


            </Router>
        );

}
export default laravelHelp;

if (document.getElementById('root')) {
    ReactDOM.render(<laravelHelp />, document.getElementById('root'));
}
