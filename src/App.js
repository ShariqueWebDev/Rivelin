import "./App.css";
import Header from "./components/header/Header";
import MoreProducts from "./components/moreProducts/MoreProducts";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import { useEffect, useState } from "react";
import Loader from "./components/loader/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);
  },[])

  return (
    <>
      <BrowserRouter>
        {isLoading ? (
          <Loader/>
        ) : (
          <div className="App">
            <Header />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/more" element={<MoreProducts />} />
            </Routes>
            <Footer />
          </div>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
