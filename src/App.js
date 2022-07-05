import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from "./componentes/Navbar";
import Carrusel from "./componentes/Carrusel";
import Card from "./componentes/Card";
import Footer from "./componentes/Footer";
import Blog from "./componentes/Blog";
import Form from "./componentes/form";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/inicio' element={<Carrusel />}> </Route>
      <Route path='/personajes' element={<Card />}> </Route>
      <Route path='/blog' element={<Blog />}> </Route>
      <Route path='/contacto' element={<Form />}> </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
