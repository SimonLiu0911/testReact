import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Login } from './pages/login/Login';
import { Admin } from './pages/admin/Admin';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Login />} />
          <Route path='admin' element={<Admin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
