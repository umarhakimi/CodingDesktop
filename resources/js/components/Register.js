import React, { Component,useState,useRef } from 'react';
import {useForm} from 'react-hook-form';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default function Register(){
    const {register, handleSubmit}= useForm();

    const onSubmit = (data) =>{
        console.log(data.name)
        axios.post('/api/register', {
            name: data.name,
            email: data.email,
            password:data.password,
         })

    }


    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='name' name='name' ref={register}/>
            <input type="email" placeholder='email' name='email' ref={register}/>
            <input type="password" placeholder='password' name='password' ref={register}/>
            <input type="submit"/>
        </form>
    );
}



if (document.getElementById('root')) {
    ReactDOM.render(<Register />, document.getElementById('root'));
}
