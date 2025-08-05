import React, { useState } from 'react';
function ApiTest() {
    const [number1, setNumber1] = useState<number | ''>('');
    const [number2, setNumber2] = useState<number | ''>('');
    const [result, setResult] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (number1 === '' || number2 === '') {
            setError('Please enter both numbers');
            return;
        }

        setLoading(true);
        setError(null);
        
        try {
            const response = await fetch('https://shrimp-improved-frequently.ngrok-free.app/test', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nums: [number1, number2]
                })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setResult(data.sum);
        } catch (err) {
            setError('Error fetching data from API');
            console.error('API Error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="api-test-container">
            <h2>API Test</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="number1">First Number:</label>
                    <input
                        id="number1"
                        type="number"
                        value={number1}
                        onChange={(e) => setNumber1(e.target.value ? Number(e.target.value) : '')}
                        placeholder="Enter first number"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="number2">Second Number:</label>
                    <input
                        id="number2"
                        type="number"
                        value={number2}
                        onChange={(e) => setNumber2(e.target.value ? Number(e.target.value) : '')}
                        placeholder="Enter second number"
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Calculating...' : 'Calculate'}
                </button>
            </form>
            
            {error && <div className="error-message">{error}</div>}
            
            {result !== null && (
                <div className="result">
                    <h3>Result:</h3>
                    <p>{result}</p>
                </div>
            )}
        </div>
    );
}

export default ApiTest;
