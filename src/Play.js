import React,{useState} from 'react'

const Play = () => {
    const [state, setState] = useState(0);
    function handleClick(){
        setState(state + 1);
    }
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={handleClick}></button>
    </div>
  )
}

export default Play