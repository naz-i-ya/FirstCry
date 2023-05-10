import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import CartPage from "./components/cartPage";
import Home from "./pages/Home"
import Products from "./pages/Products"
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
     
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<Products/>} />
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
   </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
