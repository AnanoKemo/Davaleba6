import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const [advice, setAdvice] = useState('');
    const [adviceId, setAdviceId] = useState('');
    const [loading, setLoading] = useState(true);
    const [animation, setAnimation] = useState('');

    const fetchAdvice = async () => {
        setLoading(true);
        setAnimation('fade-out'); 
        setTimeout(async () => {
            try {
                const response = await fetch('https://api.adviceslip.com/advice');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setAdvice(data.slip.advice);
                setAdviceId(data.slip.id);
            } catch (error) {
                console.error('Fetch error:', error);
                setAdvice('Failed to fetch advice. Please try again.');
                setAdviceId('');
            } finally {
                setLoading(false);
                setAnimation('fade-in'); 
            }
        }, 300); 
    };

    useEffect(() => {
        fetchAdvice();
    }, []);

    return (
        <div className="container">
            <div className={`advice-box ${animation}`}>
                <h1 className="advice-title">ADVICE #{adviceId}</h1>
                <h1 className="advice-text">{loading ? 'Loading advice...' : advice}</h1>
            </div>
            <button className="advice-button" onClick={fetchAdvice}>
                Get Advice
            </button>
            {loading && <div className="loader"></div>}
        </div>
    );
};

export default App;
