import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/pages/login';
import DashboardPage from './components/pages/dashboard';
import ViewdevicesPage from './components/pages/deviceapp';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} exact />
        <Route path='/dashboard' element={<DashboardPage/>} exact />
        <Route path='/viewdevices' element={<ViewdevicesPage/>} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
