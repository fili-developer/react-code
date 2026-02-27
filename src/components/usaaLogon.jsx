import React from 'react';

const UsaaLogon = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f5f5f5", height: "100vh" }}>
      {/* Header Section */}
      <header style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", backgroundColor: "#002a5f", color: "#fff" }}>
        <div>
          <a href="#" style={{ color: "#fff", textDecoration: "none", marginRight: "20px" }}>JOIN USAA</a>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>REGISTER FOR ACCESS</a>
        </div>
        <button style={{ background: "none", border: "none", color: "#fff", fontSize: "1.2rem", cursor: "pointer" }}>X</button>
      </header>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "calc(100vh - 50px)", padding: "20px" }}>
        {/* New to USAA Section */}
        <section style={{ flex: 1, textAlign: "center", padding: "20px", marginRight: "10px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)" }}>
          <h2 style={{ color: "#002a5f" }}>New to USAA?</h2>
          <p>Discover how to become a member and enjoy exclusive benefits.</p>
          <button style={{ padding: "10px 20px", backgroundColor: "#002a5f", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Join USAA
          </button>
        </section>

        {/* Log On Section */}
        <section style={{ flex: 1, textAlign: "center", padding: "20px", marginLeft: "10px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)" }}>
          <h2 style={{ color: "#002a5f" }}>Log On</h2>
          <form>
            <label htmlFor="online-id" style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}>Online ID:</label>
            <input
              type="text"
              id="online-id"
              name="online-id"
              style={{ width: "80%", padding: "10px", marginBottom: "20px", border: "1px solid #ccc", borderRadius: "5px" }}
              required
            />
            <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#002a5f", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Next
            </button>
          </form>
          <a href="#" style={{ display: "block", marginTop: "20px", color: "#0071c5", textDecoration: "none" }}>I need help logging on</a>
        </section>
      </div>
    </div>
  );
};

export default UsaaLogon;
