import React, {Component} from 'react';


class Resultado extends Component {
    render() {
        
        const resultado = this.props.resultado;
        const mensaje = (!resultado) ? 'Elije origen , año y tipo de seguro' : 'El total es $ ' ;
        

        return(

         <div className="alert-primary mt-3 mb-3 text-center pt-3 pb-3">
           {mensaje}

         </div>
        )
    }
}

export default Resultado;