import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import '../../sass/style.scss';
import {HashRouter as Router, Link, withRouter} from 'react-router-dom';
import laravelimg from "./images/laravel.png";

class PostQuestion extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            content: '',
        }

    }
    onTitleChange(event){
        this.setState({title: event.target.value})
    }
    onBodyChange(event){
        this.setState({content: event.target.value})
    }
    handleSubmit(event){
        let user_id = this.props.match.params.user_id;
        event.preventDefault();
        axios.post('/api/question/', {
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            title: this.state.title,
            content: this.state.content,
            user_id: user_id,
        }).catch(errors =>{
            console.log(errors);
        })
        console.log(this.state)
    }

    componentDidMount(){
        axios.post('/api/question/', {
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            title: this.state.title,
            content: this.state.content,
            user_id: 44,
        }).catch(errors =>{
            console.log(errors);
        })
    }
  render() {
    return (
        <Router>
        <div className="tab-pane fade show active">
            <div className="wrapper justify-content-center test-1">

                <nav className="col-1 navbar flex-column justify-content-center align-items-center" >
                    <Link to="/navigation" className="nav-item justify-content-center" >Get Started</Link>
                    <Link to="/laravelhelp"className="nav-item justify-content-center">Help</Link>
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

                    <div className="wrapper2">
                        <div className=' col-12 d-flex ask-container'>
                            <blockquote className='align-self-center'>Whats the problem?</blockquote>
                        </div>
                        <form id='post-question-form' onSubmit={this.handleSubmit.bind(this)} method='post'>
                        <div className='mx-auto col-md-10 d-flex ask-box justify-self-center'>
                            <label className=''>Title</label>
                            <input className='form-control' type="text" placeholder='Summarize your problem' value={this.state.title} name='title' onChange={this.onTitleChange.bind(this)}/>
                        </div>
                        <div className='mx-auto col-md-10  d-flex ask-box justify-self-center'>
                            <label className=''>Detail</label>
                            <textarea className='form-control' type="textarea" placeholder='Explain your problem' value={this.state.content} name='content' onChange={this.onBodyChange.bind(this)}/>
                        </div>
                        <div className='mx-auto col-md-10 d-flex ask-box justify-self-center'>
                            <button className='btn btn-primary submit'>
                                submit
                            </button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </Router>
    );
  }
}
export default withRouter(PostQuestion);
