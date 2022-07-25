import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import NavBar from './components/NavBar'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='Hola mundo'/>
      <ItemCount stock="20" /* initial="10" *//>
    </div>
  );
}

export default App;
