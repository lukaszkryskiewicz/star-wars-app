import { Modal, Button } from "react-bootstrap"
import Films from "../Films/Films"
import Residents from "../Residents/Residents"

const PlanetModal = ({ show, onClose, ...planet }) => {



  return (
    <>
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{planet.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Population: {planet.population} </p>
          <p>Gravity: {planet.gravity} </p>
          <p>Terrain: {planet.terrain} </p>
          <Residents residents={planet.residents} />
          <Films films={planet.films} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default PlanetModal