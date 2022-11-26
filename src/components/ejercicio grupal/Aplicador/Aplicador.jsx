import Color from "../Color/Color";
import Range from "../Range/Range";
import Text from "../Text/Text";
import { useState } from "react";


const Aplicador = () => {
    const [colorHex, setColorHex] = useState('')
    
    const handlerInput = ({target}) => {
        setColorHex(target.value)
        console.log(colorHex)
    }

    const [size, setSize] = useState('')
    
    const handlerInput2 = ({target}) => {
        setSize(target.value)
        console.log(size)
    }
      
  return (
    <div>
        <Range valueSa={size} eventoS={handlerInput2}/>   
        <Text valueColor={colorHex} valueSize={size}/> 
        <Color value={colorHex} evento={handlerInput} />
    </div>
  )
}

export default Aplicador;