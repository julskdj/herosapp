import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../../helpers/getHeroById";
import HeroItem from "./HeroItem";

const HeroScreen = () => {
  const { heroeId } = useParams();
  const hero = useMemo(()=> getHeroById(heroeId), [heroeId])
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/" />;
  }

  const imagePath = `/assets/img/heroes/${hero.id}.jpg`;
  const { superhero, alter_ego, id, publisher, characters, first_appearance } =
    hero;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={imagePath} alt={superhero} className="img-thumbnail animate__animated animate__fadeInLeft" />
      </div>

      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          
          <HeroItem titulo={"Alter Ego"} valor={alter_ego} />
          <HeroItem titulo={"Publisher"} valor={publisher} />
          <HeroItem titulo={"First Appearance"} valor={first_appearance} />

        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>

        <button className="btn btn-outline-info" onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};

export default HeroScreen;
