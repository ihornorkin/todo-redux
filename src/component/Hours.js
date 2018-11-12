import React from 'react';
import Parts from './Parts';
import './Hour.css';

const numberToArray = (number) => {
    let sizeArr = [];
    for (let i = 0; i < number; i++) {
        sizeArr = [...sizeArr, i]
    }
    return sizeArr;
}

const Hours = (props) => {
    const { color, size, timeSelect, time } = props;
    const parts = numberToArray(size).map((part, index) => {
        return <Parts key={ time + index } color={color} size={ size } handleClick={ timeSelect } hour={ time } />
    })

    return (
        <div className="hour">
            <span className="hour-count">{ time }</span>
            { parts }
        </div>
    )
}

export default Hours;