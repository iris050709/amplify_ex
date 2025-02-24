import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://3.135.213.9/users")
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
    <div>
      <h1>Lista de Usuarios</h1>
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user, index) => (
          <li key={index}>
            {user.nombre} - {user.email} - {user.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
