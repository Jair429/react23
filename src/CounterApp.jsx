import PropTypes from "prop-types"
import { useState } from "react"


export const CounterApp = ({value}) => {

  const [ counter, setCounter ] = useState(value)
  
  console.log('render')

  const handleAdd = () =>{
    // console.log(event)
    setCounter( counter + 1 );
  }
  const handleSup = () => setCounter( counter - 1 );
  
  const handleRest = () => setCounter( value );
  
  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>
      <button onClick={ handleAdd }>
        +1
      </button>
      <button onClick={ handleSup }>
        -1
      </button>
      <button onClick={ handleRest }>
        Reset
      </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number
}