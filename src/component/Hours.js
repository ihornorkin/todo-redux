import React from 'react';
import Parts from './Parts';
import './Hour.css';

const Hours = (props) => {
    const { color, size, timeSelect, time } = props;
    const parts = size.map((part, index) => {
        return <Parts key={ time + index } color={color} size={ size.length } handleClick={ timeSelect } hour={ time } />
    })

    return (
        <div className="hour">
            <span className="hour-count">{ time }</span>
            { parts }
        </div>
    )
}

export default Hours;