import { useState } from "react"

const Counter = () => {
    const [number,setNumber]=useState(0)
    const onIncrease = () =>{
        setNumber(number + 1);        
    }
    const onDecrease = () =>{
        setNumber(number - 1);        
    }
    return(
        <div>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <h2>{number}</h2>
        </div>
    )
}
export default Counter;