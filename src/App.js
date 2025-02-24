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
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Lista de Usuarios</h1>
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border border-gray-300 rounded-lg mb-4 w-1/2 text-center shadow-md"
      />
      <div className="w-full max-w-4xl">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-3 text-left">Nombre</th>
              <th className="p-3 text-left">Apellido</th>
              <th className="p-3 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="p-3">{user.nombre}</td>
                  <td className="p-3">{user.last_name}</td>
                  <td className="p-3">{user.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center p-3 text-gray-500">
                  No se encontraron usuarios
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
