import { Component, useState } from 'react';
import FechaEnFormato from '../fechaEnFormato/fechaEnFormato';

// class Reloj extends Component{
//     constructor(props){
//      super(props);
//       this.state = {
//         fecha: new Date()
//       }
//       setInterval(() => {
//         this.setState({ fecha: new Date()})
//       }, 1000)
//     }
//     render(){
//       return (
//         <div>
//           <FechaEnFormato fecha={this.state.fecha} />
//         </div>
//       )
//     }
//   }

const Reloj = () => {
    const [state, setState] = useState({
        fecha: new Date()
    })

    setInterval(() => {
        setState({ fecha: new Date()})
    }, 1000)

    return(
        <div>
          <FechaEnFormato fecha={state.fecha} />
        </div>
    )
}

  export default Reloj;