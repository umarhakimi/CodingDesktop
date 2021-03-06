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
            questions:[],
            message:(''),
            status : false,
            user_id :(''),
        }
    }
    async componentDidMount(){

        axios.get('/api/question', {
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
                }).then(response =>{

                    this.setState({
                        questions: response.data.questions,
                        message: response.data.message,
                        user_id:response.data.user.id,
                    })
                    if (response.data.message !== 'success login'){
                        this.setState({
                            status:true,
                        })
                        console.log(response.data.message)
                    }
                    if (this.state.status){

                    }
                }).catch(errors =>{
                    console.log(errors);
                })
            }

    // if (this.state.status){
    //     return <Redirect to='/login'/>
    // }


    render() {
        console.log(this.state.user_id)
                return (
                    <Router>
                        <div className="tab-pane fade show active">
                            <div className="wrapper justify-content-center test-1">

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
                                        <div className="col-10 questionBox scrollable">
                                            <h1 className='header2'>All Questions</h1>
                                            <div className="questionContainer">
                                                {this.state.questions.map(question =>
                                                    <div  className="panel">
                                                            <Link to={"/question/"+question.id} className="title">{question.title}/{question.id}</Link>
                                                            <p className="question">{question.content}</p>
                                                    </div>)}
                                            </div>
                                        </div>
                                        <div className='col-2'>
                                        <Link to={"/postquestion/"+this.state.user_id} className="nav-item justify-content-center" >Post question</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Router>
                )
    }
}


