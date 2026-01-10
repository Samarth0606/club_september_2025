function Product( {name,price} ){
    return(
        <div>
            <h1 style={ {color:"blue", fontWeight:"bold"} }>Name: {name}  </h1>
            <h1 style={ {color:"green", fontStyle:"italic"} }>Price: {price}  </h1>
        </div>
    )
}
export default Product;