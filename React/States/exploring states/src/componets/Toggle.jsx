import React, { useState } from 'react'
import Mouse from './Mouse';

function Toggle() {
    const [isToggle, setToggle] = useState(true);
  return (
    <div>
        <h1>This is from Toggle</h1>
        <button onClick={() => setToggle(!isToggle)}>Toggle</button>
        {isToggle && <Mouse/>}
    </div>
  )
}

export default Toggle
