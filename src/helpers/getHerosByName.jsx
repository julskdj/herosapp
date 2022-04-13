import { heroes } from "../data/heroes";

export const getHeroesByName = (name = "") => {
  if (name === "") {
    return [];
  }

  console.log('name')

  name = name.toLowerCase();
  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};
