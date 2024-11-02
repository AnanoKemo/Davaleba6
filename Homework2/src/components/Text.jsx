import React from 'react';

const Text = ({ children, fontSize = "24px", textColor = "black", placement = "center" }) => {
    return (
        <h1 style={{ fontSize, color: textColor, textAlign: placement }} className="text">
            {children}
        </h1>
    );
};

export default Text;
