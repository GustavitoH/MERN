import React from "react";
import { Component } from "react";
import { Button } from "@mui/material";

class Usuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendido: false,
    };
    this.vender = this.vender.bind(this);
  }

  vender() {
    this.setState({ vendido: true });
  }

  render() {
    return (
      <div>
        <h2>{this.props.nombre}</h2>
        <p>
          <b>Apellido</b> {this.props.apellido}
        </p>
        <p>
          <b>Estado:</b> {this.state.vendido ? "Vendido" : "A la venta"}
        </p>
        {!this.state.vendido && (
          <Button variant="contained" color="secondary" onClick={this.vender}>
            Vender
          </Button>
        )}
      </div>
    );
  }
}
export default Usuario;
