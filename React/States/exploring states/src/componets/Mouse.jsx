import React, { useEffect, useState } from 'react'

function Mouse() {
    const[x, setX] = useState(0);
    const[y, setY] = useState(0);

    const logMousePosition = e => {
        console.log("Mouse Position");
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log("Mouse Movments");
        window.addEventListener("mousemove", logMousePosition);

        return () => {
            window.removeEventListener("mousemove", logMousePosition);
        }
    },[])

  return (
    <>
        <h1>X = {x}, Y = {y}</h1>
    </>
  )
}

export default Mouse
