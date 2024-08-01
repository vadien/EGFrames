import { getAllProducts } from "./services/product-services.ts";
import NavBar from "./components/NavBar/NavBar.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carousel from "./components/Carousel/Carousel.tsx";

import angele from "./assets/angele-kamp-white.jpg";
import dmitry from "./assets/dmitry-mashkin-brass.jpg";
import kenny from "./assets/kenny-eliason-white.jpg";

const IMAGES = [angele, dmitry, kenny];

function App() {
  return (
    <>
      <NavBar />
      <h1>Hello World!</h1>
      <Carousel imageArr={IMAGES} />
      {/* Product Cards */}
    </>
  );
}

export default App;
