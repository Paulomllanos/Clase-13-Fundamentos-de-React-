


const Color = ({value, evento}) => {
     
  return (
    <div>
        <input name='color' type='color' value={value} onChange={evento}/>
    </div>
  )
}

export default Color;