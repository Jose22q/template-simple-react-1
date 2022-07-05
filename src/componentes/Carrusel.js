import React from "react";
import img1 from "../assets/img/carrousel-1.jpg"
import img2 from "../assets/img/carrousel-2.jpg"
import img3 from "../assets/img/carrousel-3.jpg"

const Carrusel = () => {
    return (<>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="Los simpons1"></img>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="Los simpsons2"></img>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="Los simpsons3"></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</>)
};

export default Carrusel;