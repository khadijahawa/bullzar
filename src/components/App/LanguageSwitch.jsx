import React from "react";

const LngSwitch = ({ language, onChangeLangage }) => {
  const handleChange = (event) => {
    event.preventDefault();
    onChangeLangage(event.target.value);
  };
  return (
    <div className="select">
      <select onChange={handleChange} value={language}>
        <option value="en">En</option>
        <option value="ar-EG">Ar</option>
        <option value="fr">Fr</option>
      </select>
    </div>
  );
};

export default LngSwitch;
