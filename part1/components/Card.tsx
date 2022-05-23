import React from 'react'
import data from './db.json';
import GroceryItem from './CardDetails'


type User={
  product_name:any;
  rating:any;
  price:any;
  category:any;
  desc?:any 
  };


function GroceryDetails() {
  return (
    <div>
      <h1>Groceries</h1>
      <div className="container">
          {data.map((el)=>{
              return <GroceryItem key={el.id} {...el}/>
          })}
      </div>
    </div>
  )
}
export default GroceryDetails
