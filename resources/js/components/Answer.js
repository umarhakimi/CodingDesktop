import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import '../../sass/style.scss';
import {HashRouter as Router, Switch, Route, NavLink, Link} from 'react-router-dom';
import laravelimg from "./images/laravel.png";


const Answer =(props)=>{

    // const question={props.location.test};




    return(


         <div >

             hello

         </div>

 )

}
export default Answer;


if (document.getElementById('root')) {
    ReactDOM.render(<Answer />, document.getElementById('root'));
}
