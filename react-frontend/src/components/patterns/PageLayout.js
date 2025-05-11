// src/layouts/PageLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function PageLayout() {
  return (
    <main className="page-main">
      <div className="page-container">
        <Outlet />
      </div>
    </main>
  );
}
