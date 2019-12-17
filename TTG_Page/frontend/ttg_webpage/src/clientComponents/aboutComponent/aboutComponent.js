import React from 'react';

import './aboutComponent.css';

var aboutComponent = (props) => {
    return  <div className = 'AboutComponent'>
                <h1 onClick={props.click}> {props.name} {props.salary} </h1>
                <input type="text" onChange={props.changed} /> 
            </div>
}

export default aboutComponent;