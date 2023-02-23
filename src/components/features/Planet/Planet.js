import { useSelector } from "react-redux"
import { getPlanetByUrl } from "../../../redux/planetsRedux"

const Planet = ({ url }) => {
  const homeWorld = useSelector(state => getPlanetByUrl(state, url))
  console.log(homeWorld)
  console.log(url)

  return (
    <div>
      Home World: {homeWorld.name}
    </div>
  )

}

export default Planet