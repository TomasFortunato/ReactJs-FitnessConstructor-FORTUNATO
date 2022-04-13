
import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

//components
import NavBar from './components/NavBar/navbar';
import ItemList from './components/ItemList/itemList';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListDetail from './components/ItemListDetail/ItemListDetail';
import Item from './components/Item/Item';

//pages
import ClasesList from './pages/Clases/ClasesList';
import NotFound from './pages/NotFound';
import Cart from './pages/cart'

//context
import { CartProvider } from './components/context/useContext';

function App() {

  return (
    <div className="App">
      <CartProvider> 
      <BrowserRouter>
          <NavBar />
        <Routes>
          <Route path="/clases" element={<ClasesList />}/>
          <Route path="/" element={<ItemList />}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/staff" element={<ItemListDetail/>}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </BrowserRouter> 
     </CartProvider>
    </div>
  );
}

export default App;
