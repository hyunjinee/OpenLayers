import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Map } from 'ol';

import App from './App';
import './index.css';
import Sidebar from './components/Sidebar';
import SIAMap from './components/SIAMap';
import Projection from './components/Projection';
import ProjectionAndScale from './pages/ProjectionAndScale';
import Zoom from './pages/Zoom';

const olViewSetting = {
  zoom: 8,
  center: [126.9779451, 37.5662952],
  // projection: 'EPSG:4326',
};

const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <Sidebar />,
  //   errorElement: <Sidebar />,
  // },

  {
    path: '/zoom',
    element: (
      <SIAMap initial={olViewSetting}>
        <Zoom />
      </SIAMap>
    ),
    errorElement: '에러',
  },
  {
    path: '/projection-and-scale',
    element: <ProjectionAndScale />,
    errorElement: '에러',
  },

  {
    path: '/',
    element: <App />,
    errorElement: '에러',
  },
]);

export const MapContext = React.createContext<Map | null>(null);

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);
