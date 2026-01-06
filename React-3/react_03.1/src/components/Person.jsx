function Person({user,age}){ //destructure object
    
    return(
        <div>
            <h1>Name: {user} </h1>
            <h1>Age: {age} </h1>
        </div>
    )
}

export default Person;

// -------------------------------------------------
// function Person(propsssssssss){ //object

//     console.log(propsssssssss.user , "propsssssssss"); 
//     console.log(propsssssssss.age , "propsssssssss"); 
    
//     return(
//         <div>
//             <h1>Name: {propsssssssss.user} </h1>
//             <h1>Age: {propsssssssss.age} </h1>
//         </div>
//     )
// }

// export default Person;