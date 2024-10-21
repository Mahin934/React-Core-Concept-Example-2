import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0)

    const add =()=>{
        const newAdd = count+1;
        setCount(newAdd);
    }
    const reduce =()=>{
        const newReduce = count-1;
        setCount(newReduce);
    }
    return(
        <div style={{border: '2px tomato solid', margin:'20px', padding:'30px' }}>
            <h3>Count: {count} </h3>
            <button onClick={add}>Add Count</button>
            <button onClick={reduce}>Reduce</button>
        </div>
    )
}