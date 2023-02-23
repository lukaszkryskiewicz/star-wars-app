import { useSelector } from "react-redux"
import { getPeopleByUrl } from "../../../redux/peopleRedux"

const Resident = ({ url }) => {
  const resident = useSelector(state => getPeopleByUrl(state, url))

  if (!resident) return null //DO WYRZUCENIA, TYLKO DLATEGO ŻE NIE MA INNYCH STRON

  return (
    <li>{resident.name}</li>
  )

}

export default Resident