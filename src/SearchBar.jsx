const SearchBar = (props) => {
    return (
      <input
        type="text"
        placeholder="Search users..."
        value={props.props.search}
        onChange={(e) => props.props.setSearch(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />
    );
  };
  
  export default SearchBar;
  