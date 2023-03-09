import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import App from './App';
import ProjectionAndScale from '@/pages/ProjectionAndScale';
import Zoom from '@/pages/Zoom';
import OSM from '@/pages/OSM';
import ScaleLine from '@/pages/ScaleLine';
import AnimatedGIF from '@/pages/AnimatedGIF';
import CanvasTiles from '@/pages/CanvasTiles';
import ModifyFeatures from '@/pages/ModifyFeatures';
import MainLayout from '@/components/Layout/MainLayout';
import Layout from '@/components/Layout/NavigationLayout';
import Sidebar from '@/components/Sidebar';

import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={'에러요'}>
      <Route element={<MainLayout />}>
        <Route path="/" element={<App />} />
        <Route path="osm" element={<OSM />} />
        <Route path="/zoom" element={<Zoom />} />
        <Route path="/projection-and-scale" element={<ProjectionAndScale />} />
        <Route path="/animated-gif" element={<AnimatedGIF />} />
        <Route path="/canvas-tiles" element={<CanvasTiles />} />
        <Route path="/modify-features" element={<ModifyFeatures />} />
        <Route path="/scale-line" element={<ScaleLine />} />
      </Route>
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
