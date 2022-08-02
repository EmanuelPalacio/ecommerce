import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import "./components/styles/style.css";

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <ItemListContainer greeting='Hola mundo'/> */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
