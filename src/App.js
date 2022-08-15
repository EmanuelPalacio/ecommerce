import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import CartContainer from './components/CartContainer';
import CartProvider, { CartContext } from './components/context/cartContext';
import { useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./components/styles/style.css";
import Cart from './components/Cart';



function App() {
  /* useEffect(() => {
    const db = getFirestore();
    async function getItems(db) {
      const products = collection(db);
      const Snapshot = await getDocs(products);
      const List = Snapshot.docs.map(doc => doc.data());
      return List;
      }
  },[]) */
  return (
    <div className="App">
        <CartProvider>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route exact path='/' element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/category/:category" element={<ItemListContainer />}/>
              <Route path="/cart" element={<CartContainer/>} />
              <Route path="/about" element={<h1>About</h1>} />
              <Route path="*" element={<ItemListContainer />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
    </div>
  );    
}

export default App;
