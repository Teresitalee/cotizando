import React, { Component } from 'react';

class Formulario extends Component {


  // refs son para leer los valores de los campos de un formularios
  marcaRef = React.createRef();
  yearRef = React.createRef();
  planBasicoRef = React.createRef();
  planFullRef = React.createRef();

  cotizarSeguro = (e) => {
    e.preventDefault();

    //console.log(this.marcaRef.current.value);

    // leer el plan
    const plan = this.planBasicoRef.current.checked ? 'basico' : 'full';

  //obtener los datos
  //console.log(this.marcaRef.current.value);


  //crear el objeto
  const infoAuto = {
    marca: this.marcaRef.current.value,
    year: this.yearRef.current.value,
    plan: plan
  }
  // console.log(infoAuto);
  //enviarlo al componente principal

  this.props.cotizarSeguro(infoAuto);

  // resetear el formulario en React

  //e.currentTarget.reset()

  }
    render() {
        return (
            <form className="form-group align-content-center" onSubmit={this.cotizarSeguro} >
               <div className="form-group">
                 <label>Origen</label>
                 <select className="form-control" id="exampleFormControlSelect1" ref={this.marcaRef} >
                   <option>Americano</option>
                   <option>Asiático</option>
                   <option>Europeo</option> 
                </select>
          </div>
     

  <div className="form-group">
    <label>Año</label>
    <select className="form-control" ref={this.yearRef} id="exampleFormControlSelect1" >
      <option>2018</option>
      <option>2017</option>
      <option>2016</option>
      <option>2015</option>
      <option>2014</option>
      <option>2013</option>
      <option>2012</option>
      <option>2011</option>
      <option>2010</option>
    </select>
  </div>

  <div className="form-check">
     <label htmlFor="exampleFormControlSelect3">Plan:</label><br></br>
  <input className="form-check-input" type="radio" ref={this.planBasicoRef} name="exampleRadios" id="exampleRadios1" value="option1" />
  <label className="form-check-label" htmlFor="exampleRadios1">Básico</label>
  </div>


<div className="form-check">
  <input className="form-check-input" type="radio" ref={this.planFullRef} name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label className="form-check-label" htmlFor="exampleRadios2">Full</label>
  </div>

  <button type="submit" className="btn btn-dark btn-lg btn-block mt-5 font-weight-light text-uppercase">Cotizar</button>
  </form >
        );

    }

}

export default Formulario;