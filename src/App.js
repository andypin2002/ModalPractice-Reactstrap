import './App.css';
import React, { useState, /*useEffect*/ } from 'react';
import { Container, Row, Col, Label, Input, Button, Modal } from 'reactstrap';


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
    <div>
      <Button color="danger" onClick={toggle} id="musicamaestro"> </Button>
      <Modal id="elModal" isOpen={modal} toggle={toggle} modalTransition={{ timeout: 0 }}>
        <Container>
          <div className="headRow">
            <div className="headItem1"><h1 className="App-header1">Agregar un nuevo paciente</h1></div>
            <div className="headItem2"><button className="volverButton" onClick={toggle}>VOLVER</button></div>
          </div>
          <div>
            <h2 className="App-header2" >DATOS DEL PACIENTE </h2>
          </div>
          <Row>
            <Col><h2 className="App-header2" >INFORMACIÓN PERSONAL</h2></Col>
          </Row>
          <Row>
            <Col>
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
            </Col>
            <Col>
              <Label for="patient-nombres">Nombre:</Label>
              <br />
              <Input
                type='text'
                placeholder="Nombre"
                name="nombres"
                id="patient-nombres"
                value={paciente.nombres}
                onChange={handleChanges}
              />
            </Col>
            <Col>
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
            </Col>
          </Row>
          <Row>
            <Col>
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
            </Col>
            <Col>
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
            </Col>
            <Col>
              <Label for="patient-nacimiento">Fecha de Nacimiento:</Label>
              <br />
              <Input
                type='date'
                placeholder="nacimiento"
                name="nacimiento"
                id="patient-nacimiento"
                value={paciente.nacimiento}
                onChange={handleChanges}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <label for="civil">Estado Civil:</label>
              <br/>
              <select id="civil" name="estado" onChange={handleChanges}>
                <option value="default"> </option>
                <option value="Soltero">Soltero</option>
                <option value="Casado">Casado</option>
              </select>
            </Col>
            <Col>
              <label for="gender">Género:</label>
              <br/>
              <select id="gender" name="genero" onChange={handleChanges}>
                <option value="default"> </option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
            </Col>
            <Col/>
          </Row>
          <Row>
            <Col><h2 className="App-header2" >CONTACTO</h2></Col>
          </Row>
          <Row>
            <Col xs="8">
              <Label for="patient-direccion">Direccion:</Label>
              <br/>
              <Input
                type='text'
                placeholder="Direccion"
                name="direccion"
                id="patient-direccion"
                value={paciente.direccion}
                onChange={handleChanges}
              />
            </Col>
            <Col>
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
            </Col>
          </Row>
          <Row>
            <Col>
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
            </Col>
            <Col>
              <label for="pais">País:</label>
              <br/>
              <select id="Pais:" name="pais" onChange={handleChanges}>
                <option value="default"> </option>
                <option value="España">España</option>
                <option value="Italia">Italia</option>
                <option value="EEUU">EEUU</option>
              </select>
            </Col>
            <Col>
              <label for="nacionalidad">Nacionalidad:</label>
              <br/>
              <select id="nacionalidad" name="nacionalidad" onChange={handleChanges}>
                <option value="default"> </option>
                <option value="Española">Española</option>
                <option value="Italiana">Italiana</option>
                <option value="Americana">Americana</option>
              </select>
            </Col>
          </Row>
          <Row>
            <Col><h2 className="App-header2" >INFORMACIÓN ADICIONAL</h2></Col>
          </Row>
          <Row>
            <Col>
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
            </Col>
            <Col>
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
            </Col>
            <Col>
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
            </Col>
          </Row>
          <button className="aceptarButton" onClick={() => { console.log(paciente); toggle() }} >ACEPTAR</button>

        </Container>


      </Modal>
    </div>




  );
}
// const PerInfo = (props) =>{
//   return(
//     <div className="campo">
//       <div>{ props.x }</div>
//         <input name={ props.x } type={ props.y } ></input>
//     </div>
//   );
// }
export default App;
