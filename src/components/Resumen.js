import React, { Component } from 'react';
import {primeraMayuscula} from '../Helper';


class Resumen extends Component {

    mostrarResumen = () => {
        const {marca,  year, plan} = this.props.datos;

        if(!marca || !year || !plan) return null;

    
        return (
            <div className="card bg-success mb-6">
                 <h2 className="text-center text-white pt-3 mb-3 font-weight-light" >Resumen cotización</h2><hr></hr>
                 <ul className="text-left text-white ml-2">Origen : { primeraMayuscula( marca) }</ul>
                 <ul className="text-left text-white ml-2">Plan : { primeraMayuscula( plan) }</ul>  
                 <ul className="text-left text-white ml-2 pb-4">Año de vehículo : {year}</ul>    
            </div>
        )
    }

   render() {
       

    return(
        <div>
            { this.mostrarResumen() }
            
            
        </div>
      )
   }
}

export default Resumen;