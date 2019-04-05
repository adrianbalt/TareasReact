import React from 'react';
import Tarea from './Tarea';

class ListaDeTareas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleChange(event){
    //     this.setState({value: event.target.value});
    // }

    // handleSubmit(event){
    //     this.props.onSubmit(this.state.value);
    //     this.setState({value:''});
    //     event.preventDefault();
    // }

    render(){
        const arrayTareas = this.props.tareas;
        const tareas = arrayTareas.map((tarea, pos) => {
            return (
                <Tarea 
                    key={tarea.id} 
                    tarea={tarea} 
                    actualizaTarea={this.props.actualizaTarea} 
                    borrarTarea={this.props.borrarTarea} 
                    toggleCompletarTarea={this.props.toggleCompletarTarea}/>
            );
        });
        return (
            <div className="lista-tareas">
                {tareas}
                {/* <div className="media mt-1 tarea">
                    <MDBIcon far icon="check-circle" size="2x"/>
                    <div className="media-body mb-3 mb-lg-3">
                    <MDBBadge
                        pill
                        color="danger"
                        className="ml-2 float-right">
                        <MDBIcon icon="times" />
                    </MDBBadge>
                    <h6 className="ml-3 mt-0 font-weight-bold">Desc de la tar asd asdf asdf  asdf adf asdf asdfadf asdf asdf aea</h6>
                    </div>
                </div>
                <div className="media mt-1">
                    <MDBIcon far icon="circle" size="2x"/>
                    <div className="media-body mb-3 mb-lg-3">
                    <MDBBadge
                        color="danger"
                        className="ml-2 float-right">
                        X
                    </MDBBadge>
                    <h6 className="ml-3 mt-0 font-weight-bold">Desc de la tar asd asdf asdf  asdf adf asdf asdfadf asdf asdf aea</h6>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default ListaDeTareas;