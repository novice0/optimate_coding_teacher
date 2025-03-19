import React, { useState } from "react";
import "./SignUp.css"; // Import the CSS file for styling
import googleLogo from "./assets/google-logo.png"; // Import Google logo
import appleLogo from "./assets/apple-logo.png"; // Import Apple logo
import metaLogo from "./assets/meta-logo.png"; // Import Meta logo
import discordLogo from "./assets/discord-logo.png"; // Import Discord logo

function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log("Sign Up:", { fullName, email, password, dob, mobile });
  };

  return (
    <div className="SignUp">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Date of Birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Mobile Number (with country code)"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <div className="social-logins">
        <button className="google-login">
          <img src={googleLogo} alt="Google" /> Sign Up with Google
        </button>
        <button className="apple-login">
          <img src={appleLogo} alt="Apple" /> Sign Up with Apple
        </button>
        <button className="meta-login">
          <img src={metaLogo} alt="Meta" /> Sign Up with Meta
        </button>
        <button className="discord-login">
          <img src={discordLogo} alt="Discord" /> Sign Up with Discord
        </button>
      </div>
    </div>
  );
}

export default SignUp;
