import React from 'react';
import './App.css'; 
import Text from './components/Text';
import ProductCard from './components/ProductCard';
import Button from './components/Button';

function App() {
    return (
        <div>
            <Text fontSize="36px" textColor="blue" placement="center">Grandma's Store</Text>
            <div className="product-list">
                <ProductCard 
                    name="Retro Shirt" 
                    description="Will make u feel like ur grandmaaaahahahh" 
                    price="$20" 
                    quantity="15" 
                    color="#ffcc00" 
                />
                <ProductCard 
                    name="Retro Sweater" 
                    description="Will make u feel like ur grandmaaaahahahh" 
                    price="$30" 
                    quantity="8" 
                    color="#00ccff" 
                />
            </div>
            <Button color="blue" width="120px" height="50px" text="Buy Now" />
            <Button color="green" width="120px" height="50px" text="Add to Cart" />
            <Button color="red" width="120px" height="50px" text="Remove" />
        </div>
    );
}

export default App;
