import { Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import { getPlanetByUrl } from "../../../redux/planetsRedux"
import { useState } from "react"
import PlanetModal from "../PlanetModal/PlanetModal"

const Planet = ({ url, onClick }) => {
  const homeWorld = useSelector(state => getPlanetByUrl(state, url))
  console.log(homeWorld)
  console.log(url)

  const [show, setShow] = useState(false)

  const handleClick = () => setShow(true);
  const handleClose = () => setShow(false)

  return (
    <div>
      Home World:
      <Button className="mx-3" onClick={handleClick}>{homeWorld.name}</Button>
      {show && <PlanetModal onClose={handleClose} show={show} {...homeWorld} />}
    </div>
  )

}

export default Planet