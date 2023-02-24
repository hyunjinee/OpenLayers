# OpenLayers + Vite

crete-ol-app을 통해 OpenLayers 프로젝트를 생성할 수 있다.

    npx create-ol-app my-app --template vite

## Map

```js
import './style.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    center: [0, 0],
    zoom: 7,
  }),
});
```

Map은 위와 같은 방식의 기본 코드가 제공된다.

## Event

map에 click이벤트는 다음과 같이 등록할 수 있다.

```js
map.on('click', (e) => {
  console.log(e);
});
```

이벤트 객체를 콘솔에서 확인해보자.

![](https://user-images.githubusercontent.com/63354527/221063052-5e10b4e9-ffd3-4708-95cf-6b725b6bb00b.png)

## View

```js
const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    center: [0, 0],
    zoom: 7,
    minZoom: 2,
    maxZoom: 20,
  }),
});
```

zoom, minZoom, maxZoom을 사용해서 지도의 사이즈를 조절할 수 있다.
