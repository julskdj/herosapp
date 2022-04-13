import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { getHeroesByName } from "../../helpers/getHerosByName";
import { useForm } from "../../hooks/useForm";

import HeroCard from "../Hero/HeroCard";


const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [{ searchText }, handleInputChange] = useForm({
    searchText: q,
  });

  const heroesFiltrados = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault(); 

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>SearchScreen</h1>
      <hr />
      <div className="row animate__animated animate__fadeIn">
        <div className="col-5">
          <h4>Formulario de Busqueda</h4>
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
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {q === "" ? (
            <div className="alert alert-info animate__animated animate__fadeIn">
              Buscar un Heroe
            </div>
          ) : (
            heroesFiltrados.length === 0 && (
              <div className="alert alert-danger">No hay resultados: {q}</div>
            )
          )}

          {heroesFiltrados &&
            heroesFiltrados.map((heroe, index) => (
              <HeroCard key={heroe.id} {...heroe} />
            ))}
        </div>
      </div>
    </>
  );
};

export default SearchScreen;
