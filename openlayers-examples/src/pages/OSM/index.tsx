import proj4 from 'proj4';

import SIAMap from '@/components/SIAMap';
import { osmLayer } from '@/shared/layers';
import { seoulPosition } from '@/shared/positions';

export default function OSM() {
  return (
    <SIAMap
      initial={{
        center: proj4('EPSG:4326', 'EPSG:3857', seoulPosition),
        projection: 'EPSG:3857',
        zoom: 17,
      }}
      layers={[osmLayer]}
    >
      {' '}
    </SIAMap>
  );
}
