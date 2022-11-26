import { useState } from "react"

const Text = ({valueColor, valueSize}) => {
    const [text, setText] = useState('')
    const handlerInput = ({target}) => {
        setText(target.value)
    }

  return (
    <div>
        <input type='text' value={text} onChange={handlerInput}/>
        <h1 style={{'color': valueColor, 'fontSize': `${valueSize}px`} }>{text}</h1> 
    </div>
  )
}

export default Text