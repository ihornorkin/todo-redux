import React from 'react';
import './Parts.css'

const Parts = (props) => {
    const { color, size, handleClick, hour } = props;

    const buttonStyles = {
        backgroundColor: `${color}`,
        width: 100 / size + "%"
    };    

    return (
        <button onClick={() => handleClick(hour) } className="part" style={buttonStyles} />
    )
}

export default Parts;