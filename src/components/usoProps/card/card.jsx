import './card.css';

const Card = ({datos, aumento}) => {
    
  const { nombre, profesion } = datos;
  return (
    <div className="card-container">
        <h2 className="card-name">{nombre}</h2>
        <p className="card-description">{profesion}</p>
        <button className="card-button" onClick={aumento}>Llamame</button>
    </div>
  )
}

export default Card;