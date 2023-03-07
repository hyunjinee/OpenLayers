import { useState } from 'react';
import Projection from '@/components/Projection';
import SIAMap from '@/components/SIAMap';

import { getPointResolution, get as getProjection, transform } from 'ol/proj';

const olViewSetting = {
  zoom: 5,
  center: [0, 0],
  projection: 'EPSG:4326',
};

export default function ProjectionAndScale() {
  const [projection, setProjection] = useState('EPSG:3857');

  console.log(projection, '?');

  return (
    <SIAMap initial={olViewSetting} projection={projection}>
      <Projection />
    </SIAMap>
  );
}
