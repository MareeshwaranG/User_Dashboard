import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../src/SearchBar";
import UserTable from "../src/UserTable";

const UserDashboard = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch users from API
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  // Delete User
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  // Filtered Users
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Management Dashboard</h1>

      {/* Pass props to SearchBar */}
      <SearchBar props={{ search: search, setSearch: setSearch }} />

      {/* Pass props to UserTable */}
      <UserTable props={{ users: filteredUsers, deleteUser: deleteUser }} />
    </div>
  );
};

export default UserDashboard;
