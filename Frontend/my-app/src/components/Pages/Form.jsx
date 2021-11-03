import { useState } from "react";

export default function Form(props) {
  const [nombre, setNombre] = useState({ nombre: "" });
  const [correo, setCorreo] = useState({ correo: "" });

  function cambiarNombre(e) {
    setNombre({ nombre: e.target.value });
  }

  return (
    <div>
      <h1>Formulario {props.form}</h1>
      <form>
        <div>
          <label>Nombre completo</label>
          <input type="text" onChange={cambiarNombre} />
        </div>
        <div>
          <label>Correo Electrónico</label>
          <input
            type="email"
            onChange={(e) => setCorreo({ correo: e.target.value })}
          />
        </div>
      </form>
      <div>
        <h2>{`Hola ${nombre.nombre}`}</h2>
        <span>{`Tu correo es: ${correo.correo}`}</span>
      </div>
    </div>
  );
}
