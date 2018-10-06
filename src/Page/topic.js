import React from 'react';
import './topic.css';

export class Topic extends React.Component{
    render(){
        return(
            <div className="topics">
                    <h1 className="override">{this.props.topicName}</h1>
                    <div className="data">
                        <p></p>
                    </div>
            </div>
        );
    }
}