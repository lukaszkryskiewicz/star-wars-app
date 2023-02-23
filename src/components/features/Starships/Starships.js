import Starship from "../Starship/Starship"

const Starships = ({ starships }) => {

  return (
    <div>Starships:
      <ul>
        {starships.map(starship => <Starship key={starship} url={starship} />)}
      </ul>
    </div>
  )

}

export default Starships