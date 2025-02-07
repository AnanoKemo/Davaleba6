import React from 'react';

const Button = ({ bgColor = "blue", width = "100px", height = "40px", text }) => {
    return (
        <button
            style={{ backgroundColor: bgColor, width, height }}
            className="button"
        >
            {text}
        </button>
    );
};

export default Button;
