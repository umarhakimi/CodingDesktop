import React, { Component,useState,useRef, useEffect } from 'react';
import {useForm} from 'react-hook-form';
import { Redirect } from 'react-router-dom';

export default function Login(){
    const {register, handleSubmit}= useForm();
    const [redirect, setRedirect] = useState(false);

        const onSubmit = async (data) =>{
            const response= await fetch('/api/login', {
                method:'post',
                headers:{'Content-type': 'application/json'},
                body: JSON.stringify(data),
                credentials:'include',
            });
            const content = await response.json();
            // console.log(content.message)
                if (content.message == 'success login'){
                    setRedirect(true)
                }
            }
            if (redirect){
                return <Redirect to='/navigation'/>
            }

    return(



        <div className="tab-pane fade show active">
            <div className="wrapper  justify-content-center test-1 ">
                <div className='wrapper2'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className=''>
                            <h3 >Login</h3>
                            <input className='' type="email" placeholder='email' name='email' ref={register}/>
                            <input className=' ' type="password" placeholder='password' name='password' ref={register}/>
                            <input className='btn-primary ipt row' type="submit"/>
                        </div>
                    </form>
                </div>

            </div>
        </div>


    );
}

