import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import CartContainer from './components/CartContainer';
import CartProvider from './components/context/cartContext';
import Error404 from './components/Error404'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./components/styles/styles.scss";




function App() {
  return (
    <div className="App">
        <CartProvider>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route exact path='/' element={<ItemListContainer />} />
              <Route exact path="/item/:id" element={<ItemDetailContainer />} />
              <Route exact path="/category/:category" element={<ItemListContainer />}/>
              <Route exact path="/cart" element={<CartContainer/>} />
              <Route exact path="*" element={<Error404 text="Ups, no encontramos lo que esta buscando"/>} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
    </div>
  );    
}

export default App;
