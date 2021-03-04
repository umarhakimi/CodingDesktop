import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ReactPage extends Component {
    render() {
        return (


                <div>
                    react
                </div>

        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<ReactPage />, document.getElementById('root'));
}
