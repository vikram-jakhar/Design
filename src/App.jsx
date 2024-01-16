import { Route, Routes } from "react-router-dom"
import Homepages from "./Pages/Homepages"
import "./App.css"
import Herosec from "./components/Herosec"
import Footer from "./components/Footer"
import About from "./Pages/About"
import Shop from "./Pages/Shop"
import Contact from "./Pages/Contact"
import Loder from "./components/Loder"


function App() {


  return (
    <div>
      <Loder />
      <Herosec />
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
