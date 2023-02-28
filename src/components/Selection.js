
import React, { useState } from "react";
import '../styles/App.css';

const Selection = ({ applyColor }) => {
  const [selectionStyle, setSelectionStyle] = useState({ background: '' });

  const handleClick = () => {
    applyColor(setSelectionStyle);
  }

  return (
    <div className="fix-box" style={selectionStyle} onClick={handleClick}>
      <h2 className="subheading">Selection</h2>
    </div>
  );
}

export default Selection;
