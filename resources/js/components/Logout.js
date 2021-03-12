import React, { Component,useState,useRef, useEffect } from 'react';
import {useForm} from 'react-hook-form';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default function Logout(){

    fetch('/api/logout', {
        method:'post',
        headers:{'Content-type': 'application/json'},
        credentials:'include',
    });

    return(



       <div>
           Successfully logout
       </div>
    );
}

