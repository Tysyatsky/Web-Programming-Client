import React from 'react';
import './App.styles.scss';
import { Route, Routes } from 'react-router-dom';
import ConstructorPage from './features/ConstructorPage/ConstructorPage.component';
import OrderPage from './features/OrderPage/OrderPage.component';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ConstructorPage />} />
        <Route path='/order' element={<OrderPage />} />
      </Routes>
    </div>
  );
}

export default App;
