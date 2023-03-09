import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Search from '@/components/Search';

export default function App() {
  return (
    <Wrapper>
      <NavLink to="/projection-and-scale">Projection And Scale</NavLink>
      <NavLink to="/zoom">Zoom in & out</NavLink>
      <NavLink to="/osm">OSM</NavLink>
      <NavLink to="/animated-gif">Animated GIF (TODO)</NavLink>
      <NavLink to="/canvas-tiles">Canvas Tiles</NavLink>
      <NavLink to="/modify-features">Modify Features</NavLink>
      <NavLink to="/scale-line">Scale Line (TODO)</NavLink>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 1.6rem;
`;
