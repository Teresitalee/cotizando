import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../Helper';


class App extends Component {

  state = {
    resultado : '',
    datos: {}
  }
  

  cotizarSeguro = (datos) => {
    const {marca, plan, year} = datos;
  

    // agregar una base de 5000
    let resultado = 2000;

    // obtener la diferencia de años
    const diferencia = obtenerDiferenciaAnio(year);
    
    // y por cada año restar el 3% al valor de seguro

    resultado -= ((diferencia * 3) * resultado ) / 100;


    // Americano 15% , Asiatico 5%, Europeo 30%, de incremento al valor actual
    resultado = calcularMarca(marca) * resultado;

    // el plan del auto, el basico incrementa el valor 20% y full 50%
    
    let incrementoPlan = obtenerPlan(plan);

    // dependiendo dle plana a incementar
    resultado = parseFloat ( incrementoPlan * resultado).toFixed (2);

    // crear objeto para el cuadro resumen
    const datosAuto = {
      marca : marca,
      plan : plan,
      year : year

    }

    // ya tenemos el costo
    this.setState({ 
      resultado : resultado,
      datos : datosAuto
    })
  }

  render() {
    return (
      <div className="container">
        <Header 
         titulo = 'cotizador de seguro'
         />

        <div className="container card-body w-75 ml-6 mr-6 mt-4 ">
          <Formulario
            cotizarSeguro={this.cotizarSeguro}
          />

          <Resumen
          datos={this.state.datos}        
          />
        </div>

      </div>

    );
  }
}

export default App;