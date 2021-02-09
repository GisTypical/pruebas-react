import React, { Component } from "react";

class Form extends Component {
    initialState = {
        nombre: '',
        apellido: '',
    }

    state = this.initialState;

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { nombre, apellido } = this.state;

        return (
            <form>
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    value={nombre}
                    onChange={this.handleChange}
                />
                <label htmlFor="Apellido">Apellido</label>
                <input
                    type="text"
                    name="apellido"
                    id="apellido"
                    value={apellido}
                    onChange={this.handleChange}
                />
                <input type="button" value="Enviar" onClick={this.submitForm} />
            </form>
        )
    }

}

export default Form;