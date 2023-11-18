import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    try {
      const result = await axios.post('http://localhost:8080/api/devgpt', { input });
      setResponse(result.data.response);
    } catch (error) {
      console.error('Error calling ChatGPT API:', error);
    }
  };

  return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      <div>
        <p>Response:</p>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default App;