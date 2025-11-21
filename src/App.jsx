import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from "./pages/Home";
import Sources from "./pages/Sources";
import Contact from "./pages/Contact";
import Newsbycategorie from "../../topnews/src/Newsbycategorie";
import Searchnews from "./pages/searchNews";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sources" element={<Sources />} />
          <Route
            path="/Newsbycategorie/:categorie"
            element={<Newsbycategorie />}
          />
          <Route path="/searchnews" element={<Searchnews />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
