import { useEffect, useState } from "react"

const Counter = () => {
    const [count,setCount]=useState(0)
    useEffect(() => {
    const interval = setInterval(()=>{
        setCount(count=>count+1)
    },1000)
    return ()=>{
        console.log("cleanup")
        clearInterval(interval)
    }
    },[count])
  return (
    <div>
      <h4>{count}</h4>
    </div>
  )
}

export default Counter
