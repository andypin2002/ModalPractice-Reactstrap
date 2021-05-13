import './App.css';
import React, { useState, /*useEffect*/ } from 'react';
import { Row, FormGroup, Label, Input, Button, Modal } from 'reactstrap';


function App() {
  const [modal, setModal] = useState(false);
  const [paciente, setPaciente] = useState({
    documento: " ",
    nombres: " ",
    apellidos: " ",
    correo: " ",
    telefono: " ",
    nacimiento: " ",
    estado: " ",
    genero: " ",
    direccion: " ",
    ciudad: " ",
    codigopostal: " ",
    pais: " ",
    nacionalidad: " ",
    estudios: " ",
    ocupacion: " ",
    aficiones: " "
  });
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setPaciente({ ...paciente, [name]: value });
  }
  const toggle = () => setModal(!modal);
  return (
    <div id="wao">
      <Button color="danger" onClick={toggle} id="musicamaestro"> </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <div className="App-container">
          <div class="headRow">
            <div class="headItem1"><h1 className="App-header1">Agregar un nuevo paciente</h1></div>
            <div class="headItem2"><button className="volverButton" onClick={toggle}>VOLVER</button></div>
          </div>
          <div>
            <h2 className="App-header2" >DATOS DEL PACIENTE </h2>
          </div>
          <h2>Informacion Personal</h2>
          <Row id="informacionPersonal">
            <Row>
              <FormGroup>
                <Label for="patient-document">N° de Documento:</Label>
                <br />
                <Input
                  type='text'
                  placeholder="N° de Documento"
                  name="documento"
                  id="patient-documento"
                  value={paciente.documento}
                  onChange={handleChanges}
                />
              </FormGroup>
              {/*<PerInfo x="N° de documento:" y="text"/>*/}
              <FormGroup>
                <Label for="patient-correo">Email:</Label>
                <br />
                <Input
                  type='text'
                  placeholder="ejemplo@ex.com"
                  name="correo"
                  id="patient-correo"
                  value={paciente.correo}
                  onChange={handleChanges}
                />
              </FormGroup>
              {/* {<PerInfo x="Email:" y="text"/>} */}
              <label for="civil">Estado Civil:</label>
              <select id="civil" name="estado" onChange={handleChanges}>
                <option value="default"> </option>
                <option value="Soltero">Soltero</option>
                <option value="Casado">Casado</option>
              </select>
            </Row>
            <Row >
              <FormGroup>
                <Label for="patient-nombres">Nombre</Label>
                <br />
                <Input
                  type='text'
                  placeholder="Nombre"
                  name="nombres"
                  id="patient-nombres"
                  value={paciente.nombres}
                  onChange={handleChanges}
                />
              </FormGroup>
              {/* <PerInfo x="Nombre:" y="text"/> */}
              <FormGroup>
                <Label for="patient-telefono">Telefono:</Label>
                <br />
                <Input
                  type='text'
                  placeholder="Numero de telefono"
                  name="telefono"
                  id="patient-telefono"
                  value={paciente.telefono}
                  onChange={handleChanges}
                />
              </FormGroup>
              {/* <PerInfo x="Telefono:" y="text"/> */}
              <label for="gender">Género:</label>
              <select id="gender" name="genero" onChange={handleChanges}>
                <option value="default"> </option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
            </Row>
            <Row>
              <FormGroup>
                <Label for="patient-apellidos">Apellidos:</Label>
                <br />
                <Input
                  type='text'
                  placeholder="Apellidos"
                  name="apellidos"
                  id="patient-apellidos"
                  value={paciente.apellidos}
                  onChange={handleChanges}
                />
              </FormGroup>
              {/* <PerInfo x="Apellidos:" y="text"/> */}
              <FormGroup>
                <Label for="patient-nacimiento">Fecha de Nacimiento:</Label>
                <br />
                <Input
                  type='text'
                  placeholder="nacimiento"
                  name="nacimiento"
                  id="patient-nacimiento"
                  value={paciente.nacimiento}
                  onChange={handleChanges}
                />
              </FormGroup>
              {/* <PerInfo x="Fecha de nacimiento:" y="date"/> */}
            </Row>
          </Row>
          <h2>Contacto</h2>
          <Row id="contacto">
            <Row>
              <FormGroup>
                <Label for="patient-direccion">Direccion:</Label>
                <br />
                <Input
                  type='text'
                  placeholder="Direccion"
                  name="direccion"
                  id="patient-direccion"
                  value={paciente.direccion}
                  onChange={handleChanges}
                />
              </FormGroup>
              {/* <PerInfo x="Direccion:" y="text"/> */}
              <label for="pais">País</label>
              <select id="Pais:" name="pais" onChange={handleChanges}>
                <option value="default"> </option>
                <option value="España">España</option>
                <option value="Italia">Italia</option>
                <option value="EEUU">EEUU</option>
              </select>
            </Row>
            <Row>

              <FormGroup>
                <Label for="patient-ciudad">Ciudad:</Label>
                <br />
                <Input
                  type='text'
                  placeholder="Ciudad"
                  name="ciudad"
                  id="patient-ciudad"
                  value={paciente.ciudad}
                  onChange={handleChanges}
                />
              </FormGroup>
              {/* <PerInfo x="Ciudad:" y="text"/> */}


              <label for="nacionalidad">Nacionalidad</label>
              <select id="nacionalidad" name="nacionalidad" onChange={handleChanges}>
                <option value="default"> </option>
                <option value="Española">Española</option>
                <option value="Italiana">Italiana</option>
                <option value="Americana">Americana</option>
              </select>
            </Row>
            <Row>

              <FormGroup>
                <Label for="patient-codigopostal">Codigo Postal:</Label>
                <br />
                <Input
                  type='text'
                  placeholder="XXXXXX"
                  name="codigopostal"
                  id="patient-codigopostal"
                  value={paciente.codigopostal}
                  onChange={handleChanges}
                />
              </FormGroup>
              {/* <PerInfo x="Codigo postal:" y="text"/> */}
            </Row>
          </Row>
          <h2>Informacion Adicional</h2>
          <div id="informacionAdicional">
            <FormGroup>
              <Label for="patient-estudios">Nivel de estudios:</Label>
              <br />
              <Input
                type='text'
                placeholder="estudios"
                name="estudios"
                id="patient-estudios"
                value={paciente.estudios}
                onChange={handleChanges}
              />
            </FormGroup>
            {/* <PerInfo x="Estudios:" y="text"/> */}
            <FormGroup>
              <Label for="patient-estudios">Ocupacion:</Label>
              <br />
              <Input
                type='text'
                placeholder="ocupacion"
                name="ocupacion"
                id="patient-ocupacion"
                value={paciente.ocupacion}
                onChange={handleChanges}
              />
            </FormGroup>
            {/* <PerInfo x="Ocupacion:" y="text"/> */}
            <FormGroup>
              <Label for="patient-estudios">Aficiones:</Label>
              <br />
              <Input
                type='text'
                placeholder="aficiones"
                name="aficiones"
                id="patient-aficiones"
                value={paciente.aficiones}
                onChange={handleChanges}
              />
            </FormGroup>
            {/* <PerInfo x="Aficiones:" y="text"/> */}
          </div>
          <button class="aceptarButton" onClick={() => {console.log(paciente); toggle() }} >ACEPTAR</button>



        </div>

      </Modal>
    </div>


  );
}
// const PerInfo = (props) =>{
//   return(
//     <div class="campo">
//       <div>{ props.x }</div>
//         <input name={ props.x } type={ props.y } ></input>
//     </div>
//   );
// }
export default App;
