import React, { useState } from 'react';
import axios from 'axios';
import './AiPhoneAgent.css';

const AiPhoneAgent = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!message.trim()) {
      alert('Please enter a message.');
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post('http://127.0.0.1:5000/api/response', { message });
      setResponse(res.data.response || 'No response from server.');
    } catch (error) {
      console.error('Error sending message:', error);
      setResponse('Failed to get a response. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="agent-container">
      <h1>AI Phone Agent</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
        className="input-box"
      />
      <button onClick={handleSend} className="send-button" disabled={loading}>
        {loading ? 'Sending...' : 'Send'}
      </button>
      <p className="response">Response: {response}</p>
    </div>
  );
};

export default AiPhoneAgent;
