import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class PhpPage extends Component {
    render() {
        return (
                <div>
                    php
                </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<PhpPage />, document.getElementById('root'));
}
