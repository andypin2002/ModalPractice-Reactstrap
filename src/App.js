import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App-container">
      <Head1/>
      <Head2/>
      <h2>Informacion Personal</h2>
      <div id="InformacionPersonal">
        <PerInfo x="N° de documento:" y="text"/>
        <PerInfo x="Nombre:" y="text"/>
        <PerInfo x="Apellidos:" y="text"/>
        <PerInfo x="Email:" y="text"/>
        <PerInfo x="Telefono:" y="text"/>
        <PerInfo x="Fecha de nacimiento:" y="date"/>
        <label for="gender">Género:</label>
        <select id="gender">
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select>
      </div>
      <h2>Contacto</h2>
      <div id="Contacto">
        <PerInfo x="Direccion:" y="text"/>
        <PerInfo x="Ciudad:" y="text"/>
        <PerInfo x="Codigo postal:" y="text"/>
        <PerInfo x="Direccion" y="text"/>
        <label for="pais">País</label>
        <select id="Pais:">
          <option value="España">España</option>
          <option value="Italia">Italia</option>
          <option value="EEUU">EEUU</option>
        </select>
      </div>
      <h2>Informacion Adicional</h2>
      <div id="InformacionAdicional">
        <PerInfo x="Estudios:" y="text"/>
        <PerInfo x="Ocupacion:" y="text"/>
        <PerInfo x="Aficiones:" y="text"/>
      </div>
      <button class="aceptarButton" onClick="">ACEPTAR</button>
    </div>
    
    
  );
}
const Head1 = () =>{
  return(
    <div class="headRow">
      <div class="headItem1"><h1 className="App-header1">Agregar un nuevo paciente</h1></div>
      
      <div class="headItem2"><button className="volverButton">VOLVER</button></div>
    </div>
  );
}

const Head2 = () =>{
  return(
    <div>
      <h2 className="App-header2" >DATOS DEL PACIENTE </h2>
    </div>
    
  );
}
const PerInfo = (props) =>{
  return(
    <div class="campo">
      <div>{ props.x }</div>
        <input name={ props.x } type={ props.y } ></input>
    </div>
  );
}

export default App;
