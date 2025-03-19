import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import CodeEditor from "./components/CodeEditor";
import Suggestions from "./components/Suggestions";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  const [suggestions, setSuggestions] = useState("");

  const handleCodeSubmit = async (code) => {
    const response = await fetch("http://localhost:5000/suggestions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    });
    const data = await response.json();
    setSuggestions(data.suggestions);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Optimate: AI-powered Coding Teacher</h1>
          <div className="auth-buttons">
            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/"
              element={
                <>
                  <CodeEditor onSubmit={handleCodeSubmit} />
                  <Suggestions suggestions={suggestions} />
                </>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
