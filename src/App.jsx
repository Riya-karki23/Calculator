import React from 'react'
import './App.css'
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

function handleClick(value){
setInputValue(prev=>prev+value);
}

function allClear(){
setInputValue('');
}
function deleteOne(){
 setInputValue(prev=>prev.slice(0,-1));

}

function result(){
  setInputValue(eval(inputValue));
}

  
  return (
    <div className="main">
    <div className="box">
      <input className="textbox" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
      <button onClick={allClear}>AC</button>
      <button onClick={deleteOne}>DEL</button>
      <button onClick={()=>handleClick('.')}>.</button>
      <button onClick={()=>handleClick('/')}>/</button>
  
      <button onClick={()=>handleClick('7')}>7</button>
      <button onClick={()=>handleClick('8')}>8</button>
      <button onClick={()=>handleClick('9')}>9</button>
      <button onClick={()=>handleClick('*')}>*</button>
    
      <button onClick={()=>handleClick('4')}>4</button>
      <button onClick={()=>handleClick('5')}>5</button>
      <button onClick={()=>handleClick('6')}>6</button>
      <button onClick={()=>handleClick('-')}>-</button>
    
      <button onClick={()=>handleClick('1')}>1</button>
      <button onClick={()=>handleClick('2')}>2</button>
      <button onClick={()=>handleClick('3')}>3</button>
      <button onClick={()=>handleClick('+')}>+</button>
      <button onClick={()=>handleClick('00')}>00</button>
      <button onClick={()=>handleClick('0')}>0</button>
      <button className="equal" onClick={result}>=</button>
    </div>
  </div>  
  )
}

export default App



