import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home/home";
import Cart from "./Pages/Cart/cart";

function App() {

  return (
    <>
      <Routes>
        <Route Component={Home} path="/"/>
        <Route Component={Home} path="/home"/>
        <Route Component={Cart} path="/cart"/>
      </Routes>
    </>
  )
}

export default App
