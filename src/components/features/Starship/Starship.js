import { useSelector } from "react-redux"
import { getStarshipsByUrl } from "../../../redux/starshipsRedux"

const Starship = ({ url }) => {
  const starship = useSelector(state => getStarshipsByUrl(state, url))

  if (!starship) return null //DO WYRZUCENIA, TYLKO DLATEGO ŻE NIE MA INNYCH STRON

  return (
    <li>{starship.name}</li>
  )

}

export default Starship