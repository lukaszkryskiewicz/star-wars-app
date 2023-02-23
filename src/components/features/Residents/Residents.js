import Resident from "../Resident/Resident"

const Residents = ({ residents }) => {

  return (
    <div>Residents:
      <ul>
        {residents.map(resident => <Resident key={resident} url={resident} />)}
      </ul>
    </div>
  )

}

export default Residents