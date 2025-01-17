import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Header from './Header';
const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <div className="Layout">
     <Header />
      <main className="LayoutContent">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
};

export default Layout;
