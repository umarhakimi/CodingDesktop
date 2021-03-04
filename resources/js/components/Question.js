import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import '../../sass/style.scss';
import {HashRouter as Router, Switch, Route, NavLink, Link} from 'react-router-dom';
import laravelimg from "./images/laravel.png";
export default class Question extends Component {

    constructor(){
        super();
        this.state = {
            questions:[]

        }
    }
    componentDidMount(){
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
                <div className="tab-pane fade show active">
                    <div className="wrapper justify-content-center">
                        <nav className="col-1 navbar flex-column justify-content-center align-items-center" >
                            <Link to="/navigation" className="nav-item justify-content-center" >Get Started</Link>
                            <a className="nav-item justify-content-center">Help</a>
                            <Link to="https://laravel.com/docs/8.x" className="nav-item justify-content-center">Documentation</Link>
                        </nav>
                        <div className="col-2 cont flex-fill">
                            <div className="row BoxHeader flex-fill align-items-center">
                                <div className="container-img col-2 ">
                                    <img src={laravelimg} alt="laravel" className=""/>
                                </div>
                                <div className=" col-1 ">
                                    <p className="para">Laravel</p>
                                </div>
                            </div>
                            <div className="wrapper2 row">

                                <div className="questionBox scrollable">
                                    <h1 className='header2'>All Questions</h1>
                                    <div className="questionContainer">
                                        {this.state.questions.map(question =>
                                            <div  className="panel">
                                                    <Link to={"/question/"+question.id} className="title">{question.title}/{question.id}</Link>
                                                    <p className="question">{question.content}</p>
                                            </div>)}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </Router>




        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Question />, document.getElementById('root'));
}
