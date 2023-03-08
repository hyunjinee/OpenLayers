import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { Stamen } from 'ol/source';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';

import a from '@/assets/globe.gif';

const iconFeature = new Feature({
  geometry: new Point([0, 0]),
});

const vectorSource = new VectorSource({
  features: [iconFeature],
});

const vectorLayer = new VectorLayer({
  source: vectorSource,
});

const rasterLayer = new TileLayer({
  source: new Stamen({
    layer: 'toner',
  }),
});

const gifUrl = 'assets/globe.gif';
// const gif = gifler(gifUrl);

export default function AnimatedGIF() {
  return <div>AnimatedGIF GIF 처리 때문에 아직 구현 X</div>;
}
