import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class reactPage extends Component {
    render() {
        return (


                <div>
                    react
                </div>

        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<reactPage />, document.getElementById('root'));
}
