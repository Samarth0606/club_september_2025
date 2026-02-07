import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const err = useRouteError();
    console.log(err.data , err.status , "err");
    
  return (
    <div>
        <h1>Error while surfing the page</h1>
        <h1>{err.data}</h1>
        <h1>{err.status}</h1>
        <h1>{err.statusText}</h1>
    </div>
  )
}

export default Error