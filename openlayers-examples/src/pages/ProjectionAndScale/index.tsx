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
  return (
    <SIAMap initial={olViewSetting}>
      <Projection />
    </SIAMap>
  );
}
