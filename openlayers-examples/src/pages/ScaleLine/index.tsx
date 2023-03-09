import SIAMap from '@/components/SIAMap';
import { OSM } from 'ol/source';
import TileLayer from 'ol/layer/Tile';

import Units from './Units';

export default function ScaleLine() {
  return (
    <SIAMap
      layers={[
        new TileLayer({
          source: new OSM(),
        }),
      ]}
      initial={{ center: [0, 0], zoom: 2 }}
    >
      <Units />
    </SIAMap>
  );
}
