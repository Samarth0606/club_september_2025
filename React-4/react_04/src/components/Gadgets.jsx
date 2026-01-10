function Gadgets({arr}) {
    // console.log(arr , "arr");
    
  return (
    <div>
        {
            // arr.map((item,index)=>{
            arr.map((item)=>{
                return(
                    <ol style={ item.price>50000 ? {border:"2px solid black"} : {} } >
                        <li>ID: {item.id} </li>
                        <li>NAME: {item.name} </li>
                        <li >DESC: {item.description} </li>
                        <li>PRICE: {item.price} </li>
                    </ol>
                )
            })
        }
    </div>
  )
}

export default Gadgets