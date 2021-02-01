import { useState } from 'react';
import './App.css';

 




function App() {
  
  const [counter,setCounter] = useState(0)
  
  return (
    
      
    <div>
      <button onClick={(prevValue)=>setCounter(counter-1)}>-</button>
      <span>  {counter}  </span>
      <button onClick={(prevValue)=>setCounter(counter+1)}>+</button>
    </div>
  );
}

export default App;
