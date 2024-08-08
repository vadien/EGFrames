import NavBar from "./components/NavBar/NavBar.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carousel from "./components/Carousel/Carousel.tsx";
import "./App.css";

import angele from "./assets/angele-kamp-white.jpg";
import dmitry from "./assets/dmitry-mashkin-brass.jpg";
import kenny from "./assets/kenny-eliason-white.jpg";
import LandingPage from "./pages/LandingPage/LandingPage.tsx";
import ProductPageLoader from "./containers/ProductPageLoader/ProductPageLoader.jsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import { getAllProducts } from "./services/product-services.ts";

const IMAGES = [angele, dmitry, kenny];

function App() {
  console.log(getAllProducts());
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/products" element={<HomePage />}></Route>
          <Route path="/products/:id" element={<ProductPageLoader />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
