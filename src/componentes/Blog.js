import React from "react";
import img4 from "../assets/img/t2.jpg"
import img5 from "../assets/img/e19.JPG"
import "../css/blog.css"

const Blog = () => {
    return (<>
    <div className="a">
        <div id="c" className="container">
        <h2>Episodio "Bart reprueba" Temporada 2, episodio 1</h2>
        <img src={img4}/>
        <p>Bart nunca se ha caracterizado por ser un buen estudiante, y es algo que toda la familia Simpson tiene bien en claro, sin embargo, cuando Bart estuvo a punto de reprobar el cuarto año, el «pequeño demonio» se sintió aterrado, mostrando en el capítulo una dura lección: a veces por más que te esfuerces, las cosas no siempre salen como deseas.</p>
        <h2>Episodio "El profesor de Lisa" Temporada 2, episodio 19</h2>
        <img src={img5}/>
        <p>Cuando la maestra de Lisa cree estar enferma, es sustituida por el Sr. Bergstrom, quien rápidamente se convierte en un modelo a seguir para la pequeña niña incomprendida. Esto hace que la relación entre padre e hija de Homero y Lisa se vea dañada, pues Lisa se siente humillada por la ignorancia de su padre; además, el culto profesor termina su trabajo en la ciudad y debe irse, lo que afecta mucho a Lisa, quien por primera vez experimenta lo difícil que es perder a un ser querido. Uno de los episodios más emotivos de la serie.</p>
        </div>
    </div>
</>)
};
export default Blog