
import React from 'react'

// import CartButton from './CartButton'
function handleclick(){

}

function GroceryItem({product_name,rating,price,category,desc}:{product_name:any;rating:any;price:any;category:any;desc?:any}) {
  return (
    <div>
        <img src={"https://www.marketing91.com/wp-content/uploads/2015/01/Marketing-mix-of-Samsung.jpg"} alt="" className="image" />
        <h3>product name: {product_name}</h3>
        <p>rating: {rating}</p>
        <h2>price: {price}</h2>
        <h3> category: {category}</h3>
        <a href={desc}>Read More</a>
       <button >Add to cart</button>
     </div>
  )
};

export default GroceryItem
