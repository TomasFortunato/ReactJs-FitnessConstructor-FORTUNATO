
import './App.css';
import NavBar from './components/NavBar/navbar';
import ListProducts from './components/ListProducts/listProducts';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer title="Tipo de Coutas GYM"/>
      <ListProducts />      
    </div>
  );
}

export default App;
