import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import '../../sass/style.scss';
import {HashRouter as Router, Switch, Route, NavLink, Link} from 'react-router-dom';
import laravelimg from "./images/laravel.png";


export default function Answer(props) {
    const [data, setData] = useState([]);
    const [questionID,setId] = useState(1);

    // useEffect(() =>{
    //     fetch(`/api/answer/${questionID}`)
    //     .then(response => response.json())
    //     .then((json) => setData(json));
    // },[])
    useEffect(() =>{
        axios.get('/api/answer')
        .then(res => {
            setData(res.data)
        })
    },[])


    return(


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
                            <h1 className='header2'>Answers</h1>
                            <div className="questionContainer">
                                {data.map(answer =>
                                    <div  className="panel">
                                            <div className="title">Question '{answer.questionID}'</div>
                                            <div className="answer">{answer.content}</div>

                                    </div>)}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </Router>

 )

}




if (document.getElementById('root')) {
    ReactDOM.render(<Answer />, document.getElementById('root'));
}
