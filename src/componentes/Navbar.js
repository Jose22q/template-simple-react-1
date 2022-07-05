import React from "react";
import imagen from "../assets/img/header-simpsons.gif"

const Navbar = () => {
    return (<>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <img src={imagen} alt="Los simpsons"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/inicio">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/personajes">Personajes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/blog">Blog</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/contacto">Contacto</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Busqueda</button>
      </form>
    </div>
  </div>
</nav>
</>)
};
  
export default Navbar;