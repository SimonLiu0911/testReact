import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Login } from './pages/login/Login';
import { Admin } from './pages/admin/Admin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
        </Route>
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Admin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
