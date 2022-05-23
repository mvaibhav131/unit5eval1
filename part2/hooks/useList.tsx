import React, { useState } from 'react'

function List() {
    // const [list, { push, pop, clear, reset, map }] = useState([1, 2, 3]);
    const [myArray, setMyArray] = useState([1])
    // myArray.push(1);
  return (
    
       <div className="App">
      <button onClick={ ()=>setMyArray(myArray => [...myArray,myArray.length+1])} >Append</button>
      <button onClick={ ()=>setMyArray(myArray => [myArray.length-1])}>pop</button>
      <button onClick={ ()=>setMyArray(myArray => myArray)}>clear</button>
      <button >reset</button>
      <button onClick={ ()=>setMyArray(myArray => [...myArray,myArray.length*2])}>
        Double every element
      </button>
    <h3>{myArray}</h3>
      

      <hr />
    </div>
  )
}

export default List

