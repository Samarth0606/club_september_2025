import React, { useEffect, useState } from 'react'

function Timer() {
    const [time,setTime] = useState(new Date().toLocaleTimeString([], { hour12: true }));

    useEffect(()=>{
        let idd = setInterval(()=>{
            setTime(new Date().toLocaleTimeString([], { hour12: true }))
        }, 1000)
        return ()=> clearInterval(idd)
    }, [])

  return (
    <div>Timer: {time}</div>
  )
}

export default Timer