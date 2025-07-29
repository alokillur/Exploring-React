import React, { useState } from 'react'

function HookObj() {
    const[name, setName] = useState({firstName: '', lastName:''})

  return (
    <>
        <input type="text" value={name.firstName} onChange={e => setName({...name, firstName:e.target.value})} />
        <input type="text" value={name.lastName} onChange={e => setName({...name, lastName:e.target.value})} />
        <h1>Fist Name - {name.firstName}</h1>
        <h1>Last Name - {name.lastName}</h1>
    </>
  )
}

export default HookObj
