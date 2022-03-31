
import './App.css';
import NavBar from './components/NavBar/navbar';
import ItemList from './components/ItemList/itemList';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListDetail from './components/ItemListDetail/ItemListDetail';

function App() {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer title="Tipo de Coutas GYM"/>
      <ItemList />   
      <ItemDetailContainer title= "Detalle de Coutas GYM"/>
      <ItemListDetail />
    </div>
  );
}

export default App;
