import { useForm } from "../../hooks/useForm";

const SearchScreen = () => {
  const [{ searchText }, handleInputChange] = useForm({
    searchText: "",
  });

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
  };

  return (
    <>
      <h1>SearchScreen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Formilario de Busqueda</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar un Heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              onChange={handleInputChange}
              value={searchText}
            />

            <button type="submit" className="btn btn-outline-primary mt-2">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchScreen;
