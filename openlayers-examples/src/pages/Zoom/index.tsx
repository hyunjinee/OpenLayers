import { useContext } from 'react';
import styled from 'styled-components';
import { Map } from 'ol';
import Button from '@/components/Button';
import { MapContext } from '@/main';

const olViewSetting = {
  zoom: 5,
  center: [0, 0],
};

export default function Zoom() {
  const map = useContext(MapContext) as Map;

  const handleZoomIn = () => {
    console.log('zoomIn');

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
    <ZoomControlGroup>
      <Button onClick={handleZoomIn}>+</Button>
      <Button onClick={handleZoomOut}>-</Button>
    </ZoomControlGroup>
  );
}

const ZoomControlGroup = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;

  z-index: 20;

  button {
    width: 30px;
    height: 30px;
  }
`;
