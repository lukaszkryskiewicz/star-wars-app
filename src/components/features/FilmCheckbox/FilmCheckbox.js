import { useState } from "react"

const FilmCheckbox = ({ film, onChange }) => {

  const [checked, setChecked] = useState(false)

  const handleCheck = () => {
    setChecked(!checked)
    onChange(film)
  }



  return (

    <label>
      <input type="checkbox" checked={checked} onChange={handleCheck} />
      {film.title}
    </label>
  )

}

export default FilmCheckbox

