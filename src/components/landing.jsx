import React from "react";

const UsaaLandingPage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f5f5f5", padding: "20px", minHeight: "100vh" }}>
      {/* Header Section */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#002a5f", color: "#fff", padding: "10px 20px" }}>
        <img src="https://via.placeholder.com/150" alt="USAA Logo" style={{ height: "40px" }} />
        <nav>
          <a href="#" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>About Us</a>
          <a href="#" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>Products</a>
          <a href="#" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>Contact</a>
        </nav>
        <button style={{ backgroundColor: "#0071c5", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer" }}>Log On</button>
      </header>

      {/* Hero Section */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "40px 20px", backgroundColor: "#fff", margin: "20px 0", borderRadius: "10px", boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)" }}>
        <div>
          <h1 style={{ color: "#002a5f", fontSize: "2.5rem" }}>Welcome to USAA</h1>
          <p style={{ fontSize: "1.2rem", margin: "20px 0" }}>Discover financial solutions tailored to your needs.</p>
          <button style={{ backgroundColor: "#002a5f", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer" }}>Get Started</button>
        </div>
        <img src="https://via.placeholder.com/400" alt="Hero Image" style={{ maxWidth: "400px", borderRadius: "10px" }} />
      </div>

      {/* Features Section */}
      <div style={{ display: "flex", justifyContent: "space-around", margin: "20px 0" }}>
        <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", width: "30%" }}>
          <img src="https://via.placeholder.com/100" alt="Feature 1" style={{ marginBottom: "10px" }} />
          <h3 style={{ color: "#002a5f" }}>Banking</h3>
          <p>Manage your finances with ease and security.</p>
        </div>
        <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", width: "30%" }}>
          <img src="https://via.placeholder.com/100" alt="Feature 2" style={{ marginBottom: "10px" }} />
          <h3 style={{ color: "#002a5f" }}>Insurance</h3>
          <p>Protect what matters most with our coverage options.</p>
        </div>
        <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", width: "30%" }}>
          <img src="https://via.placeholder.com/100" alt="Feature 3" style={{ marginBottom: "10px" }} />
          <h3 style={{ color: "#002a5f" }}>Investments</h3>
          <p>Plan for your future with our investment solutions.</p>
        </div>
      </div>

      {/* Footer Section */}
      <footer style={{ textAlign: "center", marginTop: "20px", fontSize: "0.9rem", backgroundColor: "#002a5f", color: "#fff", padding: "20px", borderRadius: "10px" }}>
        <p style={{ margin: "10px 0" }}>Copyright © 2025 USAA</p>
        <div>
          <a href="#" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>Security Center</a>
          <a href="#" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>Privacy Center</a>
          <a href="#" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>Accessibility at USAA</a>
        </div>
      </footer>
    </div>
  );
};

export default UsaaLandingPage;