import React from "react";
import { getHeroByPublisher } from "../../helpers/getHeroByPublisher";
import HeroCard from "./HeroCard";

const HeroList = ({ publisher }) => {
  const heroes = getHeroByPublisher(publisher);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((heroe, index) => (
        <HeroCard key={heroe.id} {...heroe}>
          {heroe.superhero}
        </HeroCard>
      ))}
    </div>
  );
};

export default HeroList;
