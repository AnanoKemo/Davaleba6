import React from 'react';

const Card = ({ title }) => { // Accept title as a prop
    return (
        <div className="w-[300px] border-2 border-black rounded-xl p-4 bg-gray-500">
            <h1 className='text-white text-2xl font-semibold'>{title}</h1> {/* Use the title prop */}
        </div>
    );
};

export default Card;
