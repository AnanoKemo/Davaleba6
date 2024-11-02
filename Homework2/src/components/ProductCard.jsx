import React from 'react';

const ProductCard = ({ name, description, price, quantity, color }) => {
    return (
        <div className="product-card">
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <div style={{ width: '100%', height: '100px', backgroundColor: color, borderRadius: '4px', marginTop: '10px' }}></div>
        </div>
    );
};

export default ProductCard;
