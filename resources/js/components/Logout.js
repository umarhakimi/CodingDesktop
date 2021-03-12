import React, { Component,useState,useRef, useEffect } from 'react';

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

