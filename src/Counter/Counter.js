import './Counter.css';
import React, {useState} from 'react';


function Counter(){
    const [countt,setCount]=useState(0);

const handleClick=()=>{
    if(countt>0){
       setCount(countt-1);
    }
}


    return(<div className="count">
        <div>{countt}</div>
       <button className="increment" onClick={()=>setCount(countt+1)}>Increament</button>
       <button className="decrement" onClick={handleClick}>Decrement</button>
       <button  className="reset" onClick={()=>setCount(0)}>Reset </button>
    </div>

    )
} 

export default Counter;