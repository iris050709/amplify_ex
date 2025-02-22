import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://3.135.213.9/users")
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos recibidos:", data); // Debug para ver la respuesta
        setUsers(data);
      })
      .catch((error) => console.error("Error al obtener usuarios:", error));
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.nombre} - {user.email} - {user.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
