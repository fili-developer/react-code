import React, { useState } from "react";

const EnrollForDigitalAccess = () => {
  const [form, setForm] = useState({
    verificationMethod: "ssn",
    ssn: "",
    country: "United States of America +1",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", form);
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <span style={styles.logo}>USAA®</span>
        <div style={styles.headerIcons}>
          <span style={styles.chatIcon}>Chat</span>
          <button style={styles.closeButton}>X</button>
        </div>
      </header>

      {/* Alert Box */}
      <div style={styles.alertBox}>
        ⚠️ Never share this link or your logon information; it will protect you
        from fraud. USAA won’t contact you and ask you for this information.
      </div>

      {/* Main Form Section */}
      <main style={styles.main}>
        <h1 style={styles.heading}>Let’s get started.</h1>
        <p style={styles.subtext}>
          Please provide the following information to begin enrollment. We’ll
          send you a secure link to the number provided. We will never contact
          you and ask for this link.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>
            How would you like to verify your account?
          </label>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="verificationMethod"
                value="ssn"
                checked={form.verificationMethod === "ssn"}
                onChange={handleChange}
              />
              Social Security Number or Tax ID Number
            </label>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="verificationMethod"
                value="usaaNumber"
                checked={form.verificationMethod === "usaaNumber"}
                onChange={handleChange}
              />
              USAA Number
            </label>
          </div>

          {form.verificationMethod === "ssn" && (
            <div style={styles.inputGroup}>
              <label style={styles.label}>
                Social Security Number or Tax ID Number
              </label>
              <div style={styles.inputWrapper}>
                <input
                  type="password"
                  name="ssn"
                  value={form.ssn}
                  onChange={handleChange}
                  style={styles.input}
                />
                <button style={styles.eyeIcon}>👁️</button>
              </div>
            </div>
          )}

          <div style={styles.inputGroup}>
            <label style={styles.label}>Country</label>
            <select
              name="country"
              value={form.country}
              onChange={handleChange}
              style={styles.select}
            >
              <option value="United States of America +1">
                United States of America +1
              </option>
              {/* Add more countries as needed */}
            </select>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Phone number</label>
            <input
              type="text"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
              style={styles.input}
            />
            <p style={styles.note}>
              Using the text message option may result in charges from your
              service provider. <a href="#">Show full text message terms.</a>
            </p>
          </div>

          <button type="submit" style={styles.button}>
            Text enroll link
          </button>
        </form>
      </main>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <p>Copyright © 2025 USAA</p>
        <div>
          <a href="#" style={styles.footerLink}>
            Security Center
          </a>
          <a href="#" style={styles.footerLink}>
            Privacy Center
          </a>
          <a href="#" style={styles.footerLink}>
            Accessibility at USAA
          </a>
        </div>
        <p>NC-1120</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  headerIcons: {
    display: "flex",
    gap: "10px",
  },
  chatIcon: {
    color: "#0071c5",
    cursor: "pointer",
  },
  closeButton: {
    background: "none",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
  },
  alertBox: {
    backgroundColor: "#fff3cd",
    border: "1px solid #ffeeba",
    padding: "10px",
    borderRadius: "4px",
    marginBottom: "20px",
    fontSize: "14px",
  },
  main: {
    marginBottom: "20px",
  },
  heading: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtext: {
    fontSize: "14px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  radioGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  radioLabel: {
    fontSize: "14px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  inputWrapper: {
    display: "flex",
    alignItems: "center",
  },
  input: {
    padding: "10px",
    fontSize: "14px",
    flex: "1",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  select: {
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  eyeIcon: {
    background: "none",
    border: "none",
    cursor: "pointer",
    marginLeft: "10px",
  },
  note: {
    fontSize: "12px",
    color: "#555",
  },
  button: {
    backgroundColor: "#0071c5",
    color: "#fff",
    padding: "10px",
    fontSize: "14px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  footer: {
    marginTop: "20px",
    fontSize: "12px",
    textAlign: "center",
  },
  footerLink: {
    margin: "0 5px",
    color: "#0071c5",
    textDecoration: "none",
  },
};

export default EnrollForDigitalAccess;