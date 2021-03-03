import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import '../../sass/style.scss';
import {HashRouter as Router, Switch, Route, NavLink, Link} from 'react-router-dom';
import laravelimg from "./images/laravel.png";
import reactPage from "../components/reactPage";
import Answer from "./Answer";
export default class Question extends Component {

    constructor(){
        super();
        this.state = {
            questions:[]

        }
    }
    componentWillMount(){
        axios.get('/api/question').then(response =>{
            this.setState({
                questions: response.data
            })
        }).catch(errors =>{
            console.log(errors);
        })
    }

    render() {

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

                                <div class="questionBox scrollable">
                                    <h1 class='header2'>All Questions</h1>
                                    <div className="questionContainer">
                                        {this.state.questions.map(question =>
                                            <div class="panel">
                                                    <Link to={{
                                                        pathname:"/answer",
                                                        test:{
                                                            id:'hello this is test'
                                                        }

                                                    }} class="title">{question.title}/{question.id}</Link>
                                                    <p class="question">{question.content}</p>
                                            </div>)}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </Router>


             /* <Router>
            <div className="container">
                 {this.state.questions.map(question =>
                 <div class="panel">
                 <Link to="" class="title">{question.title}</Link>
                 <p class="question">{question.content}</p>
             </div>)}

            </div>
             </Router> */



        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Question />, document.getElementById('root'));
}
