import { useState } from "react"

function Button(){
    const [count,setCount] = useState(0);
    const increase = () =>{
        setCount(count+1)
    }
    const decrease = () =>{
        setCount(count -1)
    }
    const reset =()=>{
        setCount(0)
    }
    return(
        <div className="button">
           <button onClick={increase}>Increase</button>
           <button onClick={decrease}>Decrease</button>
           <button onClick={reset}>Reset</button>
           {count}
        </div>
    )
}

export default Button