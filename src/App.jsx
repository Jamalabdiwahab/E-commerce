import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import Products from './Pages/Products'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './Pages/Cart'
import Hero from './Components/Hero'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    {/* <Hero/> */}
      <Routes>
        <Route path="/" element={<Hero/>}></Route>
        {/* <Route path="/cart" element={<Cart/>}></Route> */}
      </Routes>
    <Products/>  
    <Cart/>
    <Footer />
    </BrowserRouter>
  )
}

export default App
