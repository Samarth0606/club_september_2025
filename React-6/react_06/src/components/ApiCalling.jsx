import React, { useEffect, useState } from 'react';
import axios from 'axios';
function ApiCalling() {
    const [todo,setTodos] = useState([]);
    useEffect( ()=>{
        const API = "https://jsonplaceholder.typicode.com/todos";
        async function calling(){
            let resp = await axios.get(API)
            console.log(resp.data);
            setTodos(resp.data)
        }
        calling()
    }, [] )
  return (
    <div>
        {
            todo.map((item)=>{
                return( <div style={ {border: "2px solid green"} }>
                        <h1>ID: {item.id} </h1>
                        <h1>TITLE: {item.title}</h1>
                    </div> )
            })
        }
    </div>
  )
}
export default ApiCalling



// --------------------------------------------------------


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// function ApiCalling() {
//     const [todo,setTodos] = useState([]);
//     useEffect( ()=>{
//         const API = "https://jsonplaceholder.typicode.com/todos";
//         axios.get(API)
//         .then( (resp)=>{ 
//             console.log(resp.data) 
//             setTodos(resp.data)
//         } )
//         .catch( (err)=>{ console.log(err) } )
//     }, [] )
//   return (
//     <div>
//         {
//             todo.map((item)=>{
//                 return( <div style={ {border: "2px solid green"} }>
//                         <h1>ID: {item.id} </h1>
//                         <h1>TITLE: {item.title}</h1>
//                     </div> )
//             })
//         }
//     </div>
//   )
// }
// export default ApiCalling


// ---------------------------------------------------------------


// import React, { useEffect, useState } from 'react'
// function ApiCalling() {
//     const [todo,setTodos] = useState([]);
//     useEffect( ()=>{
//         const API = "https://jsonplaceholder.typicode.com/todos";
//         async function calling(){
//             const result = await fetch(API);
//             const data = await result.json();
//             setTodos(data);
//         }
//         calling();
//     }, [] )
//   return (
//     <div>
//         {
//             todo.map((item)=>{
//                 return( <div style={ {border: "2px solid green"} }>
//                         <h1>ID: {item.id} </h1>
//                         <h1>TITLE: {item.title}</h1>
//                     </div> )
//             })
//         }
//     </div>
//   )
// }
// export default ApiCalling

// ---------------------------------------------------

// import React, { useEffect, useState } from 'react'
// function ApiCalling() {
//     const [todo,setTodos] = useState([]);
//     const [count,setCount] = useState(0)
//     useEffect( ()=>{
//         const API = "https://jsonplaceholder.typicode.com/todos";
//         fetch(API) //return promise
//         .then( (resp)=>{ return resp.json() } ) //partial data
//         .then( (data)=>{  //entire data
//             console.log(data , "data")
//             setTodos(data)
//          } ) 
//         .catch( (err)=>{ console.log(err , "catch") } )
//     }, [count] )
//     // }, [todo] )
//     // } )
//   return (
//     <div>
//         <button onClick={()=>setCount(count+1)}>Count: {count}</button>
//         {
//             todo.map((item)=>{
//                 return( <div style={ {border: "2px solid green"} }>
//                         <h1>ID: {item.id} </h1>
//                         <h1>TITLE: {item.title}</h1>
//                     </div> )
//             })
//         }
//     </div>
//   )
// }
// export default ApiCalling