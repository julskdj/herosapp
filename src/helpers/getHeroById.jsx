import { heroes } from "../data/heroes"


export const getHeroById = (id = '') => {
    console.log('geyHeroeById Called')
    return heroes.find(hero => hero.id === id)
}