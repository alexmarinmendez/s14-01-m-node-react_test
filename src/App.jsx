import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './components/Home'
import LinkedinAuth from "./components/LinkedinAuth"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin-with-linkedin" element={<LinkedinAuth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App