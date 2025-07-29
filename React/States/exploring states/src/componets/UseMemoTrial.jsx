import React, { useMemo, useState } from 'react'

function UseMemoTrial() {
    const [increment1, setIncrement1] = useState(0);
    const [increment2, setIncrement2] = useState(0);

    const handleIncrement1 = () => {
        setIncrement1(increment1+1);
    } 

    const handleIncrement2 = () => {
        setIncrement2(increment2+1);
    } 

    const isEven = useMemo(() => {
        let i = 0;
        while(i < 2000000000) i++;
        return increment1%2 == 0;
    }, [increment1])

    //     const isEven = () => {
    //     let i = 0;
    //     while(i < 20000000000000000) i++;
    //     return increment1%2 == 0;
    // }

  return (
    <div>
      <button onClick={handleIncrement1}>{increment1}</button>
      {isEven ? "True" : "False"}
      <button onClick={handleIncrement2}>{increment2}</button>
    </div>
  )
}

export default UseMemoTrial
