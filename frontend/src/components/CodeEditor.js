import React, { useState } from "react";

function CodeEditor({ onSubmit }) {
  const [code, setCode] = useState("");

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(code);
  };

  return (
    <div className="CodeEditor">
      <h2>Code Editor</h2>
      <textarea
        value={code}
        onChange={handleCodeChange}
        placeholder="Write your code here..."
      />
      <button className="submit-button" onClick={handleSubmit}>
        Submit Code
      </button>
    </div>
  );
}

export default CodeEditor;
