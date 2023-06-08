import './App.css';
import { Route, Routes } from 'react-router-dom';
import ItemsPage from './React0608/pages/ItemsPage';
import { useState } from 'react';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ItemsPage/>}/>
      <Route path="/:category/:language" element={<ItemsPage/>}/>
    </Routes>
  );
}

export default App;
