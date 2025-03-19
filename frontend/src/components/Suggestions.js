import React from "react";

function Suggestions({ suggestions }) {
  return (
    <div className="Suggestions">
      <h2>Suggestions</h2>
      <p>{suggestions}</p>
    </div>
  );
}

export default Suggestions;
