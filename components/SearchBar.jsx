function SearchBar({ search, onSearchChange }) {
    return (
      <input
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full p-2 rounded bg-gray-800 text-white mb-6"
      />
    );
  }
  
  export default SearchBar;
  