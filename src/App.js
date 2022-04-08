
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
import ClasesList from './pages/Clases/ClasesList';
import NotFound from './pages/NotFound';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <NavBar />
        <Routes>
          <Route path="/clases" element={<ClasesList />}/>
          <Route path="/" element={<ItemList />}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/staff" element={<ItemListDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
