import './style.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const map = new Map({
  target: 'map',
  // layers: [
  //   new TileLayer({
  //     source: new OSM(),
  //   }),
  // ],
  view: new View({
    center: [0, 0],
    zoom: 2,
    // rotation: 0.5,
  }),
});

map.on('click', (e) => {
  console.log(e);
});

// Basemap Layers
const openStreetMapStandard = new TileLayer({
  source: new OSM(),
  visible: false,
  title: 'OSM Standard',
});

const openStreetMapHumanitarian = new TileLayer({
  source: new OSM({
    url: 'https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
  }),
  visible: false,
  title: 'OSM Humanitarian',
});

const stamenTerrain = new TileLayer({
  source: new OSM({
    url: 'https://stamen-tiles-{a-d}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}',
    attributions: [
      'Map tiles by <a href="https://stamen.com">Stamen Design</a>, under <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="https://openstreetmap.org">OpenStreetMap</a>, under <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.',
    ],
    maxZoom: 18,
  }),
  visible: true,
  title: 'Stamen Terrain',
});

// Layer Group
const baseLayerGroup = new LayerGroup({
  layers: [openStreetMapStandard, openStreetMapHumanitarian, stamenTerrain],
});

map.addLayer(baseLayerGroup);
