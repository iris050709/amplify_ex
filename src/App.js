import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://3.135.213.9/users")
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos recibidos:", data);
        setUsers(data);
      })
      .catch((error) => console.error("Error al obtener usuarios:", error));
  }, []);

  return (
    <div className="container">
      <h1 className="title">Lista de Usuarios</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Apellido</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.nombre}</td>
              <td>{user.email}</td>
              <td>{user.last_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
