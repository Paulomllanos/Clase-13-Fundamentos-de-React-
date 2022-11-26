

const Range = ({valueSa, eventoS}) => {
  return (
    <div>
        <input type='range' min='15' max='70' value={valueSa} onChange={eventoS}/>
    </div>
  )
}

export default Range