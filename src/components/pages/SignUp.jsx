import React, { useState } from "react";
import { Button } from "../ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"; // Import Firebase a
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Create user with Firebase
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Sign Up Successful!");
      navigate("/"); // Redirect to Home.jsx
    } catch (err) {
      setError(err.message); // Display error message
      alert("Sign Up Failed: " + err.message);
    }
  };

  return (
    <div style={styles.container}>
      {/* Title */}
      <header style={styles.header}>
        <h1 style={styles.title}>BookMyHeritage</h1>
      </header>

      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Sign Up</h2>
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={handleSignUp} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          {/* Button aligned with the input fields */}
          <Button variant="outline" type="submit" style={styles.button}>
            Sign Up
          </Button>
        </form>
        <p style={styles.linkText}>
          Already have an account?{" "}
          <Link to="/login" style={styles.link}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    padding: "20px",
    backgroundImage: "url('/Background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  },
  header: {
    position: "absolute",
    top: "20px",
    left: "20px",
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#fff",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "400px",
    padding: "20px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "8px",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    backdropFilter: "blur(10px)",
  },
  heading: {
    color: "#fff",
    marginBottom: "20px",
  },
  form: {
    width: "100%",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "10px",
  },
  label: {
    color: "#fff",
    marginBottom: "5px",
  },
  input: {
    width: "80%",
    padding: "10px",
    margin: "5px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "#fff",
  },
  button: {
    width: "80%",
    padding: "10px",
    marginTop: "10px",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    color: "#fff",
    cursor: "pointer",
  },
  linkText: {
    color: "#fff",
  },
  link: {
    textDecoration: "none",
    color: "#007bff",
  },
  error: {
    color: "red",
    marginBottom: "10px",
  },
};

export default SignUp;