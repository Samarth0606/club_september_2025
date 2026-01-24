
import React, { useEffect, useRef} from 'react'

function Salary() {
    // let [salary,setSalary] = useState(4000000);
    let spanEl = useRef(4000000);

    useEffect(()=>{
        setTimeout(()=>{
            console.log(spanEl);
            
            spanEl.current.innerText = "20000"
        }, 3000)
    } , [])

  return (
    <div>Salary is : <span ref={spanEl}>{ spanEl.current }</span> </div>
  )
}

export default Salary

// ---------------------------------------------

// import React from 'react'

// function Salary() {
//     let salary = 4000000;

//     setTimeout(()=>{
//         document.getElementById('salar').innerHTML = "20000"
//     }, 3000)

//   return (
//     <div>Salary is : <span id='salar' >{salary}</span> </div>
//   )
// }

// export default Salary