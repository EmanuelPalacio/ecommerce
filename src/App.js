import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./components/styles/style.css";
import CartProvider from './components/context/cartContext';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
        <CartProvider>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route exact path='/' element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/category/:category" element={<ItemListContainer />}/>
              <Route path="/cart" element={<Cart/>} />
              <Route path="/about" element={<h1>About</h1>} />
              <Route path="*" element={<ItemListContainer />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
    </div>
  );    
}

export default App;
