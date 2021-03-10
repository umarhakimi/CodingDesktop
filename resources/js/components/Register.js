import React, { Component,useState,useRef } from 'react';
import {useForm} from 'react-hook-form';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default function Register(){
    const {register, handleSubmit}= useForm();
    const [token, setToken] = useState(1);

    const onSubmit = (data) =>{
        console.log(data.name)

        axios.post('/api/register', {
            name: data.name,
            email: data.email,
            password:data.password,
         }).then(res => {
             setToken({access_token:res.data.access_token})
         })
         console.log(token)
    }

    return(
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='name' name='name' ref={register}/>
            <input type="email" placeholder='email' name='email' ref={register}/>
            <input type="password" placeholder='password' name='password' ref={register}/>
            <input type="submit"/>
        </form>

        </div>
    );
}



if (document.getElementById('root')) {
    ReactDOM.render(<Register />, document.getElementById('root'));
}
