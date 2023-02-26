import { useSelector } from "react-redux"
import { getFilmByUrl } from "../../../redux/filmsRedux"

const Film = ({ url }) => {
  const film = useSelector(state => getFilmByUrl(state, url))

  return (
    <li>{film.title}</li>
  )

}

export default Film