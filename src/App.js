
import './App.css';
import NavBar from './components/NavBar/navbar';
import ItemList from './components/ItemList/itemList';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer title="Tipo de Coutas GYM"/>
      <ItemList />      
    </div>
  );
}

export default App;
