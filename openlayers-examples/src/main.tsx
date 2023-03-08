import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import App from './App';
import Sidebar from './components/Sidebar';
import ProjectionAndScale from './pages/ProjectionAndScale';
import Zoom from './pages/Zoom';
import Layout from './components/Layout';
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={'에러요'}>
      <Route path="/" element={<App />} />
      <Route path="/zoom" element={<Zoom />} />
      <Route path="/projection-and-scale" element={<ProjectionAndScale />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
