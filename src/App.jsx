
import "./index.css"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductDetailPage from './components/ProductDetailPage';
import Home from './components/Home';
import Header from "./components/Header";
import Cart from '../src/components/Cart'


function App() {
 
  return (
    <BrowserRouter>
        <Header/>
       <Routes>
         <Route path={"/"} element={<Home/>}/>
         <Route path={"products/:productId"} element={<ProductDetailPage/>}/>
         <Route path={"cart"} element={<Cart/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App
