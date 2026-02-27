import React from "react";
import "./USAAComponent.css";

const USAAComponent = () => {
  return (
    <div className="usaa-container">
      <header className="usaa-header">
        <nav className="usaa-nav">
          <a href="#" className="nav-link">
            JOIN USAA
          </a>
          <a href="#" className="nav-link">
            REGISTER FOR ACCESS
          </a>
          <button className="close-button">×</button>
        </nav>
      </header>

      <main className="usaa-main">
        <div className="new-to-usaa">
          <h2>New to USAA?</h2>
          <p>
            Become a member by selecting "Join USAA" — it's easy and only takes
            a few minutes.
          </p>
          <button className="join-usaa-button">Join USAA</button>
        </div>

        <div className="log-on">
          <h3>Log On</h3>
          <form className="log-on-form">
            <label htmlFor="online-id" className="form-label">
              Online ID
            </label>
            <input
              type="text"
              id="online-id"
              className="form-input"
              placeholder="Online ID"
            />
            <button type="submit" className="next-button">
              Next
            </button>
          </form>
          <a href="#" className="help-link">
            I need help logging on
          </a>
        </div>
      </main>
    </div>
  );
};

export default USAAComponent;