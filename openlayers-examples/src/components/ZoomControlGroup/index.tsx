import { useContext } from 'react';
import { Map } from 'ol';
import styled from 'styled-components';

import { MapContext } from '@/components/SIAMap/MapContext';
import Button from '@/components/Button';

export default function ZoomControlGroup() {
  const map = useContext(MapContext) as Map;

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
    <Wrapper>
      <Button onClick={handleZoomIn}>+</Button>
      <Button onClick={handleZoomOut}>-</Button>
    </Wrapper>
  );
}

// import { useContext } from 'react';
// import styled from 'styled-components';
// import { Map } from 'ol';

// import Button from '@/components/Button';
// import { MapContext } from '@/components/SIAMap/MapContext';
// import SIAMap from '@/components/SIAMap';

// const olViewSetting = {
//   zoom: 5,
//   center: [0, 0],
// };

// export default function Zoom() {
//   const map = useContext(MapContext) as Map;

//   console.log(map, '/');

//   return (
//     <SIAMap initial={olViewSetting}>
//       <ZoomControlGroup />
//       <ZoomControlGroup>

//       </ZoomControlGroup>
//     </SIAMap>
//   );
// }

const Wrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;

  z-index: 20;

  button {
    width: 3rem;
    height: 3rem;
  }
`;
