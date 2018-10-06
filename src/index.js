import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Main} from './Page/main';

class Index extends React.Component{
    render(){
        return(
            <Main />
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));