import { useContext } from 'react';
import styled from 'styled-components';
import { Map } from 'ol';

import Button from '@/components/Button';
import { MapContext } from '@/components/SIAMap/MapContext';
import SIAMap from '@/components/SIAMap';
import ZoomControlGroup from '@/components/ZoomControlGroup';

const olViewSetting = {
  zoom: 5,
  center: [0, 0],
};

export default function Zoom() {
  const map = useContext(MapContext) as Map;

  console.log(map, '/');

  const handleZoomIn = () => {
    if (!map) {
      return;
    }

    console.log(map.getView());

    const view = map.getView();
    const zoom = view.getZoom();

    if (zoom) {
      view.setZoom(zoom + 1);
    }
  };

  const handleZoomOut = () => {
    if (!map) {
      return;
    }

    const view = map.getView();
    const zoom = view.getZoom();

    if (zoom) {
      view.setZoom(zoom - 1);
    }
  };

  return (
    <SIAMap initial={olViewSetting}>
      <ZoomControlGroup />
    </SIAMap>
  );
}
