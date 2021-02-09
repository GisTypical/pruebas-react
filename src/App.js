import React, { Component } from "react";
import Table from './Table';
import Form from "./Form";
class App extends Component {

    state = {
        personas: []
    }

    handleSubmit = (persona) => {
        this.setState({ personas: [...this.state.personas, persona] });
    }

    removePersona = (index) => {
        const { personas } = this.state;

        this.setState({
            personas: personas.filter((persona, i) => {
                return i !== index;
            })
        })
    }

    render() {
        const { personas } = this.state;
        return (
            <div className="container">
                <Table personasData={personas} removePersona={this.removePersona} />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App;