
import { useReducer } from 'react'
const reducer=(state:any,action:any)=>{
    switch(action.type){
        case "inc":
        return {...state,counter:state.counter+action.payload};
        case "dec":
        return {...state,counter:state.counter-action.payload};
        case "set":
        return {...state,counter:"100"};
        default:
        return state;
    }
 };


function Counter() {
    const [state,dispatch]=useReducer(reducer,{counter:0});
  return (
    <div>
       <hr />
      <button onClick={() => {dispatch({type:"inc",payload:1})}}>Add 1</button>
      <button onClick={() => {dispatch({type:"inc",payload:3})}}>Add 3</button>
      <button onClick={() => {dispatch({type:"dec",payload:1})}}>Sub 1</button>
      <button onClick={() => {dispatch({type:"dec",payload:4})}}>Sub 4</button>
      <button onClick={() => {dispatch({type:"set"})}}>Set counter to 100</button>
      <h3>Value: {state.counter}</h3>
    </div>
  )
}

export default Counter;



