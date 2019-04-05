import React from 'react';
import { MDBIcon, MDBBadge } from "mdbreact";

class Tarea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {editando: false, value:props.tarea.tarea};
        this.handleDoubleClick = this.handleDoubleClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleDoubleClick(event){
        this.setState({editando: true, value:this.props.tarea.tarea});
    }

    handleBlur(event){
        this.setState({editando: false});
        this.props.actualizaTarea(this.props.tarea.id, this.state.value);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    render(){
        const tarea = this.props.tarea.tarea;
        const id = this.props.tarea.id;
        const iconoTarea = this.props.tarea.completado ? "check-circle" : "circle";
        let claseTarea = "ml-3 mt-1";
        if(this.props.tarea.completado)
            claseTarea += " completado";
        let domTarea;
        let domIcon;
        let domBadge;
        if(this.state.editando){
            domIcon = <MDBIcon far icon={iconoTarea} size="2x"/>;
            domTarea = <div className="ml-3"><input type="text" autoFocus={true} value={this.state.value} onBlur={this.handleBlur} onChange={this.handleChange} className="form-control" /></div>
        }else{
            domIcon = <MDBIcon far icon={iconoTarea} size="2x" onClick={()=>this.props.toggleCompletarTarea(id)}/>
            domTarea = <div className={claseTarea} onDoubleClick={this.handleDoubleClick}>{tarea}</div>;
            domBadge = (
                <MDBBadge
                    pill
                    color="danger"
                    className="ml-2 float-right"
                    onClick={()=>this.props.borrarTarea(id)}>
                    <MDBIcon icon="times" />
                </MDBBadge>
            );
        }
        return (
            <div className="media mt-1 tarea">
                {domIcon}
                <div className="media-body mb-3 mb-lg-3">
                {domBadge}
                {domTarea}
                </div>
            </div>
        );
    }
}

export default Tarea;