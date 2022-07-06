import "./Search.css";

const Search = ({ setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Enter a pokemon name"
      onChange={(e) => setSearch(e.target.value)}
      className="search"
    />
  );
};

export default Search;
