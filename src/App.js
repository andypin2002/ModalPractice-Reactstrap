import './App.css';
import React from 'react';
import { Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App-container">
      <Head1/>
      <Head2/>
      <h2>Informacion Personal</h2>
      <Row id="informacionPersonal">
        <Row>
          <PerInfo x="N° de documento:" y="text"/>
          <PerInfo x="Email:" y="text"/>
          <label for="civil">Estado Civil:</label>
          <select id="civil">
              <option value="default"> </option>
              <option value="Soltero">Soltero</option>
              <option value="Casado">Casado</option>
          </select>          
        </Row>
        <Row >
        <PerInfo x="Nombre:" y="text"/>
        <PerInfo x="Telefono:" y="text"/>
        <label for="gender">Género:</label>
        <select id="gender">
            <option value="default"> </option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
        </select>
          
        </Row>
        <Row>
        <PerInfo x="Apellidos:" y="text"/>
        <PerInfo x="Fecha de nacimiento:" y="date"/>
        
        </Row>
      </Row>

      <h2>Contacto</h2>
      <Row>

        <Row>
          <PerInfo x="Direccion:" y="text"/>
          <label for="pais">País</label>
          <select id="Pais:">
            <option value="default"> </option>
            <option value="España">España</option>
            <option value="Italia">Italia</option>
            <option value="EEUU">EEUU</option>
          </select>
        </Row>

        <Row>
          <PerInfo x="Ciudad:" y="text"/>
          <label for="nacionalidad">Nacionalidad</label>
          <select id="nacionalidad">
            <option value="Española">Española</option>
            <option value="Italiana">Italiana</option>
            <option value="Americana">Americana</option>
          </select>
        </Row>
        <Row>
          <PerInfo x="Codigo postal:" y="text"/>
        </Row>

        
        
        
        
      </Row>
      <h2>Informacion Adicional</h2>

      <div id="informacionAdicional">

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
