import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi";

import "./Navbar.css"

function Navbar() {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  //função criada para prevenir que o formulario nao submeta 
  const handleSubmit = (e) => {
    e.preventDefault();
    
    //se search vazio retorne nada
    if(!search) return

    // se não pegamos a queryString como parametro para redirecionar e depois limpe o campo com String vazia 
    navigate(`/search?q=${search}`)
    setSearch("")


  }
  return (
    <nav id="navbar">
        <h2>
          <Link to="/"><BiCameraMovie/>MoviesLista</Link>
        </h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Busque um filme" onChange={(e) => setSearch(e.target.value)}
            value={search} />
            
            <button type="submit">
                <BiSearchAlt2/>
            </button>
        </form>
      </nav>
    
  )
}

export default Navbar