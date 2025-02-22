import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("3.135.213.9/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error al obtener usuarios:", error));
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.nombre} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
