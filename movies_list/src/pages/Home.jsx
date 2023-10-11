import {useState, useEffect} from "react";
import MovieCard from "../components/MovieCard";

import './MoviesGrid.css'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {

    const [topMovies, setTopMovies] = useState([])

    // função uma requisição assíncrona da API que irá me retornar os top filmes
    const getTopRatedMovies = async (url) => {
        
        const res = await fetch(url)
        const data = await res.json()


        setTopMovies(data.results);
    }

    // hook usado para toda vez que o componente for carregado
    // em alguns estágios da aplicação baseado no arrayDependence
    useEffect(() => {
        
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
        getTopRatedMovies(topRatedUrl)    

    }, [])
    
  return (
    <div className="container">
        <h2 className="title">Melhores filmes:</h2>
        <div className="movies-container">
            {topMovies.length === 0 && <p>Carregando...</p>}
            {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
        </div>      
    </div>
  )
}

export default Home
