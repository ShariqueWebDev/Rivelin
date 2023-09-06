import { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import MoreProducts from "./components/moreProducts/MoreProducts";
import Home from "./pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/more" element={<MoreProducts />} />
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
