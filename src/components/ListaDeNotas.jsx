import React, { Component } from "react";
import CardNota from "./CardNota/cardNota";

export default class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Estudos").map((categoria, index) => {
          return (
            <li key={index}>
              <div>{categoria}</div>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}
