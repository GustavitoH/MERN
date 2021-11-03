import axios from "axios";
import { useState, useEffect } from "react";
import UserCard from "../Molecules/UserCard";

export default function Users() {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/usuarios").then((res) => {
      setState(res.data.usuario);
    });
  }, []);
  return (
    <div>
      <h1>Usuarios</h1>
      <div>
        {state.map((e) => (
          <UserCard
            key={e._id}
            nombre={e.nombre}
            cedula={e.cedula}
            edad={e.edad}
          />
        ))}
      </div>
    </div>
  );
}
