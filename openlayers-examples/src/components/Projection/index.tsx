import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { View } from 'ol';
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import { ScaleLine, defaults as defaultControls } from 'ol/control.js';
import {
  ProjectionLike,
  getPointResolution,
  get as getProjection,
  transform,
} from 'ol/proj.js';
import { MapContext } from '../SIAMap/MapContext';

interface Props {
  projection: ProjectionLike;
  setProjection: React.Dispatch<React.SetStateAction<string>>;
}

export default function Projection() {
  const [projection, setProjection] = useState('EPSG:3857');
  const map = useContext(MapContext) as Map;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProjection(e.target.value);
  };

  useEffect(() => {
    if (!map) {
      return;
    }
    const currentView = map.getView();
    const currentProjection = currentView.getProjection();
    const newProjection = getProjection(projection);
    const currentResolution = currentView.getResolution() as number;
    const currentCenter = currentView.getCenter();
    const currentRotation = currentView.getRotation();

    if (currentCenter && newProjection) {
      const newCenter = transform(
        currentCenter,
        currentProjection,
        newProjection,
      );
      const currentMPU = currentProjection.getMetersPerUnit() as number;
      const newMPU = newProjection.getMetersPerUnit() as number;
      const currentPointResolution =
        getPointResolution(
          currentProjection,
          1 / currentMPU,
          currentCenter,
          'm',
        ) * currentMPU;
      const newPointResolution =
        getPointResolution(newProjection, 1 / newMPU, newCenter, 'm') * newMPU;
      const newResolution =
        (currentResolution * currentPointResolution) / newPointResolution;
      const newView = new View({
        center: newCenter,
        resolution: newResolution,
        rotation: currentRotation,
        projection: newProjection,
      });

      map.setView(newView);
    }

    console.log('effect', projection);
  }, [map, projection]);

  return (
    <Wrapper>
      <select
        id="view-projection"
        value={projection as string}
        onChange={handleChange}
      >
        <option value="EPSG:3857">Spherical Mercator (EPSG:3857)</option>
        <option value="EPSG:4326">WGS 84 (EPSG:4326)</option>
      </select>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;

  z-index: 10;

  select {
    outline: none;
  }
`;
