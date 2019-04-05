import React from 'react';
import { MDBInput } from "mdbreact";

class AgregaTarea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        this.props.onSubmit(this.state.value);
        this.setState({value:''});
        event.preventDefault();
    }

    render(){
        return (
            <div className="media-body ml-3">
                <form className="form-agrega-tarea" onSubmit={this.handleSubmit}>
                    <MDBInput label="Agregar Tarea" className="input-agrega-tarea" value={this.state.value} outline  onChange={this.handleChange} required/>
                </form>
            </div>
        );
    }
}

export default AgregaTarea;