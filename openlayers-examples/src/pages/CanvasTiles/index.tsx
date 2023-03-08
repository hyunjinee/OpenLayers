import SIAMap from '@/components/SIAMap';
import TileLayer from 'ol/layer/Tile';
import { OSM, TileDebug } from 'ol/source';

export default function CanvasTiles() {
  return (
    <SIAMap
      initial={{
        center: [0, 0],
        zoom: 1,
      }}
      layers={[
        new TileLayer({
          source: new OSM(),
        }),
        new TileLayer({
          source: new TileDebug(),
        }),
      ]}
    ></SIAMap>
  );
}
