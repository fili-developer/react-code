import React, { useState } from 'react';

const UsaaLogon = () => {
  const [onlineId, setOnlineId] = useState('');

  const handleInputChange = (e) => {
    const { value } = e.target;
    setOnlineId(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with Online ID:', onlineId);
  };

  return (
    <div style={{ backgroundColor: '#1a2a44', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Bar */}
      <header style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px 20px', backgroundColor: '#1a2a44' }}>
        <button style={{ marginRight: '20px', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
          JOIN USAA
        </button>
        <button style={{ marginRight: '20px', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
          REGISTER FOR ACCESS
        </button>
        <button style={{ background: 'none', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer' }}>
          X
        </button>
      </header>

      {/* Main Content */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', maxWidth: '900px' }}>
          {/* Left Section */}
          <div style={{ flex: 1, marginRight: '20px' }}>
            <h1>New to USAA?</h1>
            <p>Become a member by selecting "Join USAA" — it's easy and only takes a few minutes.</p>
            <button style={{ padding: '10px 20px', backgroundColor: 'white', color: '#1a2a44', border: 'none', cursor: 'pointer' }}>
              Join USAA
            </button>
          </div>

          {/* Right Section (Log On Form) */}
          <div style={{ flex: 1, backgroundColor: 'white', color: '#1a2a44', padding: '20px', borderRadius: '5px' }}>
            <h2>Log On</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="onlineId" style={{ display: 'block', marginBottom: '5px' }}>Online ID</label>
                <input
                  type="text"
                  id="onlineId"
                  name="onlineId"
                  value={onlineId}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                  required
                  placeholder="Enter your Online ID"
                />
              </div>
              <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#5c822b', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Next
              </button>
            </form>
            <a href="#" style={{ display: 'block', marginTop: '10px', textAlign: 'center', color: '#0056b3' }}>
              I need help logging on
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsaaLogon;