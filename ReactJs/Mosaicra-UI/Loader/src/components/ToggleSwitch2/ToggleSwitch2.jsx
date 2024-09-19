import React, { useState } from 'react'
import './ToggleSwitch2.css'
const ToggleSwitch2 = () => {
    const [isOn, setIsOn]=useState(false);
    
    const handleToggle=()=>{
        setIsOn(!isOn);
    };
  return (
    <div>
      <label className="switch" >
        <input type="checkbox" checked={isOn} onChange={handleToggle}/>
        <span className="slider"></span>
      </label>
    </div>
  )
}

export default ToggleSwitch2
