const UserTable = (props) => {
  return (
    <table className="w-full border-collapse border border-red-400">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-400 p-2">ID</th>
          <th className="border border-gray-400 p-2">Name</th>
          <th className="border border-gray-400 p-2">Email</th>
          <th className="border border-gray-400 p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.props.users.map(user => (
          <tr key={user.id} className="text-center">
            <td className="border border-gray-400 p-2">{user.id}</td>
            <td className="border border-gray-400 p-2">{user.name}</td>
            <td className="border border-gray-400 p-2">{user.email}</td>
            <td className="border border-gray-400 p-2">
              <button
                onClick={() => props.props.deleteUser(user.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
