import { useEffect, useRef } from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import OSM from 'ol/source/OSM';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function App() {
  return (
    <Wrapper>
      <NavLink to="/projection-and-scale">Projection And Scale</NavLink>
      <br />
      <NavLink to="/zoom">Zoom</NavLink>
      <br />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  height: calc(100% - 5.2rem);
  top: 5.2rem;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  font-size: 1.6rem;
`;
