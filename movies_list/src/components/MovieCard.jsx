import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa"

// importação imagens API
const imageUrl = import.meta.env.VITE_IMG;

//recebe via parametro o filme
// Linka o poster, title, average 
const MovieCard = ({movie, showLink = true}) => {
  return (
    <div className="movie-card">      
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  )
}

export default MovieCard
