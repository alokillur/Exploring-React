import React, { useState } from 'react'

function ClassCounter() {
  const [count, setCount] = useState(0);

  // function handelCount() {
  //   setCount(count => count+1)
  // }

  return (
    <>
      <h1>Hooks Counter</h1>
      <h2>Count - {count}</h2>
      <button onClick={() => setCount(count => count+1)}>Increment</button>
    </>
  )
}

export default ClassCounter
