import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import AgregaTarea from './AgregaTarea';
import ListaDeTareas from './ListaDeTareas';
import classNames from 'classnames';

class App extends Component {

  constructor(props) {
    super(props);
    this.VER_TODOS = 'todos';
    this.VER_PENDIENTES = 'pendientes';
    this.VER_COMPLETADOS = 'completados';
    this.state = {tareas: props.model.listarTareas(), ver:this.VER_TODOS};
    this.agregarTarea = this.agregarTarea.bind(this);
    this.actualizaTarea = this.actualizaTarea.bind(this);
    this.borrarTarea = this.borrarTarea.bind(this);
    this.borrarCompletados = this.borrarCompletados.bind(this);
    this.toggleCompletarTarea = this.toggleCompletarTarea.bind(this);
  }

  agregarTarea(tarea){
    this.props.model.agregarTarea(tarea);
    this.setState({tareas:this.props.model.listarTareas()});
  }

  actualizaTarea(id, nuevaTarea){
    this.props.model.actualizaTarea(id,nuevaTarea);
    this.setState({tareas:this.props.model.listarTareas()});
  }

  toggleCompletarTarea(id){
    this.props.model.toggleCompletarTarea(id);
    this.setState({tareas:this.props.model.listarTareas()});
  }

  toggleAll(checkAll){
    this.props.model.toggleAll(checkAll);
    this.setState({tareas:this.props.model.listarTareas()});
  }

  borrarTarea(id){
    this.props.model.borrarTarea(id);
    this.setState({tareas:this.props.model.listarTareas()});
  }

  borrarCompletados(id){
    this.props.model.borrarCompletados();
    this.setState({tareas:this.props.model.listarTareas()});
  }

  listar(tipo){
    this.setState({ver:tipo});
  }

  render() {
    const incompletas = this.state.tareas.filter((tarea)=>!tarea.completado);
    let checkAll = incompletas.length > 0;
    let listado;
    let clase1 = classNames({"active": this.state.ver===this.VER_TODOS}, "btn-pie");
    let clase2 = classNames({"active": this.state.ver===this.VER_PENDIENTES}, "ml-2", "btn-pie");
    let clase3 = classNames({"active": this.state.ver===this.VER_COMPLETADOS}, "ml-2", "btn-pie");
    if(this.state.ver === this.VER_TODOS){
      listado = this.state.tareas;
    }else if(this.state.ver === this.VER_PENDIENTES){
      listado = incompletas;
    }else if(this.state.ver === this.VER_COMPLETADOS){
      listado = this.state.tareas.filter((tarea)=>tarea.completado);
    }
    return (
      <div className="App">
        <MDBContainer>
          <h2>Lista de Tareas</h2>
          <MDBRow center>  
            <MDBCol lg="6" md="8" sm="10" xs="12" className="bg-shadow">
              <div className="ingresa-tarea mb-3">
                {/* <MDBInput label="Agregar Tarea" className="mb-0" />
                <MDBBtn size="sm">Agregar</MDBBtn> */}
                <div className="media mt-3 mb-2">
                  <MDBIcon icon="chevron-down" size="2x" onClick={()=>this.toggleAll(checkAll)}/>
                  <AgregaTarea onSubmit={this.agregarTarea} />
                </div>
              </div>
              <ListaDeTareas 
                tareas={listado} 
                actualizaTarea={this.actualizaTarea} 
                borrarTarea={this.borrarTarea}
                toggleCompletarTarea={this.toggleCompletarTarea} />
              <div className="pie-lista">
                <MDBRow>
                  <MDBCol className="text-left ">Pendientes: {incompletas.length}</MDBCol>
                  <MDBCol size="5">
                  <span className={clase1} onClick={()=>this.listar(this.VER_TODOS)}>Todos</span>
                  <span className={clase2}  onClick={()=>this.listar(this.VER_PENDIENTES)}>Pendientes</span>
                  <span className={clase3}  onClick={()=>this.listar(this.VER_COMPLETADOS)}>Completados</span>
                    {/* <MDBRow>
                      <MDBCol><span onClick={()=>this.listar(this.VER_TODOS)}>Todos</span></MDBCol>
                      <MDBCol><span onClick={()=>this.listar(this.VER_PENDIENTES)}>Pendientes</span></MDBCol>
                      <MDBCol><span onClick={()=>this.listar(this.VER_COMPLETADOS)}>Completados</span></MDBCol>
                    </MDBRow> */}
                  </MDBCol>
                  <MDBCol className="text-right"><span onClick={this.borrarCompletados}>Borrar Completos</span></MDBCol>
                </MDBRow>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
