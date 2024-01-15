import { Route, Routes } from "react-router-dom"
import Homepages from "./Pages/Homepages"
 import "./App.css" 


function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepages/>}/>
    </Routes> 
      
    </>
  )
}

export default App
