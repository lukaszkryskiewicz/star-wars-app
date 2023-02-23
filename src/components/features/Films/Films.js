import Film from "../Film/Film"

const Films = ({ films }) => {

  return (
    <div>Films:
      <ul>
        {films.map(film => <Film key={film} url={film} />)}
      </ul>
    </div>
  )

}

export default Films