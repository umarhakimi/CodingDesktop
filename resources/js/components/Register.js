import React, { Component,useState,useRef } from 'react';
import {HashRouter as Router, Switch, Route, NavLink, Link, Redirect} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { defaultTo } from 'lodash';

const Register=()=>{
    const {register, handleSubmit}= useForm();
    const [token, setToken] = useState(1);
    const [redirect, setRedirect] = useState(false);

    const onSubmit = (data) =>{

        axios.post('/api/register', {
                name: data.name,
                email: data.email,
                password:data.password,
            }).then(res => {
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })
        }

    return(

        <div className="tab-pane fade show active">
            <div className="wrapper  justify-content-center ">
                <div className='login-container test-1'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='test-1 login-box '>
                            <h3 className='ipt row'>Register</h3>
                            <input className='ipt row' type="text" placeholder='name' name='name' ref={register}/>
                            <input className='ipt row' type="email" placeholder='email' name='email' ref={register}/>
                            <input className=' ipt row' type="password" placeholder='password' name='password' ref={register}/>
                            <input className='btn-primary ipt row' type="submit"/>
                        </div>
                    </form>
                </div>

            </div>
        </div>
        // <div>
        // <form onSubmit={handleSubmit(onSubmit)}>
        //     <input type="text" placeholder='name' name='name' ref={register}/>
        //     <input type="email" placeholder='email' name='email' ref={register}/>
        //     <input type="password" placeholder='password' name='password' ref={register}/>
        //     <input type="submit"/>
        // </form>

        // </div>
        );
}

export default Register;
