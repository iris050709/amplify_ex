import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://3.133.138.221/users")
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos recibidos:", data);
        setUsers(data);
      })
      .catch((error) => console.error("Error al obtener usuarios:", error));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="title">Lista de Usuarios</h1>
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <table className="user-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.nombre}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
