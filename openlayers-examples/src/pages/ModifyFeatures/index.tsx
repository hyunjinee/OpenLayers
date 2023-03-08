import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { fromLonLat } from 'ol/proj';
import {
  Modify,
  Select,
  defaults as defaultInteractions,
} from 'ol/interaction';

import SIAMap from '@/components/SIAMap';

const vector = new VectorLayer({
  background: 'white',
  source: new VectorSource({
    url: 'https://openlayers.org/data/vector/us-states.json',
    format: new GeoJSON(),
    wrapX: false,
  }),
});

const select = new Select({});
const modify = new Modify({ features: select.getFeatures() });

export default function ModifyFeatures() {
  return (
    <SIAMap
      initial={{
        center: fromLonLat([-100, 38.5]),
        zoom: 4,
      }}
      layers={[vector]}
      interactions={defaultInteractions().extend([select, modify])}
    />
  );
}
