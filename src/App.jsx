
import Nav from "./Components/Nav"
import Navbar from "./Components/Navbar"
import About from "./Components/About"
import Service from "./Components/Service"
import Formsection from "./Components/Formsection"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Blogmultiplesection from "./BlogsComponent/Blogmultiplesection"
import Mainform from "./Contactcomponents/Mainform"
import Mainpage from "./Components/Mainpage"


const App = () => {
  return (
    <Router >
      <Nav />
      <Navbar />

      <Routes>

        <Route path="/" element={<Mainpage />} />
        <Route path="/form" element={<Formsection />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Mainform />} />
        <Route path="/blog" element={<Blogmultiplesection />} />
      </Routes>




    </Router>


  )
}
export default App



