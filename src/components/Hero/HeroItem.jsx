

const HeroItem = ({titulo, valor}) => {
  return (
    <li className="list-group-item">
        <b>{titulo}:</b> {valor}
    </li>
  )
}

export default HeroItem