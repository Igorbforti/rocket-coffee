import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"

function App() {

  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" />
      </Routes>
      <Home />
    </Router>
    </>    
  )
}

export default App
