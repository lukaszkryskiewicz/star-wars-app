import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { updateFilmFilter } from "../../../redux/filmFilterRedux";
import { getAllFilms } from "../../../redux/filmsRedux"
import FilmCheckbox from "../FilmCheckbox/FilmCheckbox"

const FilmFilter = () => {

  const dispatch = useDispatch();
  const [checkedFilms, setCheckedFilms] = useState([])

  //W tym rozwiązaniu state nic nie daje!

  const films = useSelector(getAllFilms)


  const handleChange = (film) => {
    const newCheckedFilms = checkedFilms
    console.log(checkedFilms)
    if (!newCheckedFilms.includes(film.url)) {
      newCheckedFilms.push(film.url)
    } else {
      newCheckedFilms.splice(newCheckedFilms.indexOf(film.url), 1)

    }
    setCheckedFilms(newCheckedFilms)
    dispatch(updateFilmFilter(newCheckedFilms))
  }

  console.log(checkedFilms)


  return (
    <div>Filter by Film:
      <ul>
        {films.map(film =>
          <FilmCheckbox key={film.title} film={film} onChange={handleChange} />)}
      </ul>
    </div>
  )

}

export default FilmFilter

