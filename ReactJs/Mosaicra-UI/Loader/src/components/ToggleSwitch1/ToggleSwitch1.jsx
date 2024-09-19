import React from 'react';
import './ToggleSwitch1.css';

const ToggleSwitch1 = ({ checked, onChange }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="slider"></span>
    </label>

  );
};

export default ToggleSwitch1;