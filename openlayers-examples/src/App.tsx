import { useEffect, useRef } from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import OSM from 'ol/source/OSM';
import { NavLink } from 'react-router-dom';

export default function App() {
  return (
    <>
      <NavLink to="/projection-and-scale">Projection And Scale</NavLink>
      <br />
      <NavLink to="/zoom">Zoom</NavLink>
      <br />
    </>
  );
}
