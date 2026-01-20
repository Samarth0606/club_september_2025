import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [count,setCount] = useState(0);
    const [inp,setInp] = useState(0);
    function handleInp(e){
        setInp(e.target.value)
    }
    
    const sum = useMemo(()=>{
        let ans = 0;
        for(let i = 1;i<=inp;i++){
            ans=ans+i;
            console.log("loop executed");
        }
        return ans;
    }, [inp])

  return (
    <div>
        <input onChange={handleInp} type="text" value={inp}  />
        <h1>Sum: {sum}</h1>
        <button onClick={()=>setCount(count+1)}>Count = {count}</button>
    </div>
  )
}

export default UseMemo