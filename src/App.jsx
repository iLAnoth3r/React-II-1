import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navegacion";
import Home from "./components/Home";
import Contacto from "./components/Contacto";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
}

export default App;
