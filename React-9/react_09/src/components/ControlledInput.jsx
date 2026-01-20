import React, { useState } from 'react'

function ControlledInput() {

    const [inp,setInp] = useState("");
    function handleInput(e){
        setInp(e.target.value)
    }

  return (
    <div>
        {/* <input type="text" /> */}
        <input onChange={handleInput} type="text" value={inp}/>
    </div>
  )
}

export default ControlledInput