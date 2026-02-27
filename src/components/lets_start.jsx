import React from "react";

const UsaaEnroll = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f5f5f5", padding: "20px", minHeight: "100vh" }}>
      {/* Header Section */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#002a5f", color: "#fff", padding: "10px 20px" }}>
        <img src="https://via.placeholder.com/150" alt="USAA Logo" style={{ height: "40px" }} />
        <h1 style={{ margin: 0 }}>Enroll for Digital Access</h1>
        <nav>
          <button style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", margin: "0 10px" }}>💬</button>
          <button style={{ background: "none", border: "none", color: "#fff", cursor: "pointer" }}>X</button>
        </nav>
      </header>

      {/* Alert Section */}
      <div style={{ backgroundColor: "#ffcc00", padding: "10px", borderRadius: "5px", margin: "20px 0", textAlign: "center" }}>
        <p style={{ margin: 0 }}>
          Never share this link or your logon information. We will never contact you and ask for this link.
        </p>
      </div>

      {/* Main Content */}
      <main style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)" }}>
        <h2 style={{ color: "#002a5f" }}>Let’s get started.</h2>
        <p>We will never contact you and ask for this link.</p>

        {/* Form Section */}
        <form>
          <fieldset style={{ margin: "20px 0", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
            <legend>How would you like to verify your account?</legend>
            <div style={{ marginBottom: "10px" }}>
              <input type="radio" id="ssn" name="verification" value="ssn" />
              <label htmlFor="ssn" style={{ marginLeft: "10px" }}>Social Security Number or Tax ID Number</label>
            </div>
            <div>
              <input type="radio" id="usaa-number" name="verification" value="usaa-number" />
              <label htmlFor="usaa-number" style={{ marginLeft: "10px" }}>USAA Number</label>
            </div>
          </fieldset>

          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="ssn-input" style={{ display: "block", marginBottom: "5px" }}>Social Security Number or Tax ID Number:</label>
            <input
              type="text"
              id="ssn-input"
              name="ssn-input"
              style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
              required
            />
            <button type="button" style={{ marginTop: "5px", background: "none", border: "none", cursor: "pointer" }}>👁️</button>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="country-select" style={{ display: "block", marginBottom: "5px" }}>Country:</label>
            <select id="country-select" name="country-select" style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
              <option value="usa">United States of America +1</option>
              {/* Add other country options here */}
            </select>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="phone-number" style={{ display: "block", marginBottom: "5px" }}>Phone Number:</label>
            <input
              type="tel"
              id="phone-number"
              name="phone-number"
              style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
              required
            />
          </div>

          <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#002a5f", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", width: "100%" }}>
            Text enroll link
          </button>
        </form>
      </main>

      {/* Footer Section */}
      <footer style={{ textAlign: "center", marginTop: "20px", fontSize: "0.9rem" }}>
        <p style={{ margin: "10px 0" }}>Copyright © 2025 USAA</p>
        <div>
          <a href="#" style={{ margin: "0 10px", color: "#0071c5", textDecoration: "none" }}>Security Center</a>
          <a href="#" style={{ margin: "0 10px", color: "#0071c5", textDecoration: "none" }}>Privacy Center</a>
          <a href="#" style={{ margin: "0 10px", color: "#0071c5", textDecoration: "none" }}>Accessibility at USAA</a>
        </div>
        <p style={{ marginTop: "10px" }}>NC-1120</p>
      </footer>
    </div>
  );
};

export default UsaaEnroll;