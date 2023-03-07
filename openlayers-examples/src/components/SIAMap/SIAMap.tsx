import { useEffect, useRef } from 'react';
import { Coordinate } from 'ol/coordinate';
import { Map, View, MapBrowserEvent, MapEvent } from 'ol';
import { ProjectionLike, useGeographic } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

export interface SIAView {
  zoom: number;
  resolution?: number;
  center: Coordinate;
}

export interface SIAMapProps {
  initial: SIAView;

  width?: number | string;
  height?: number | string;

  projection?: ProjectionLike;

  minZoom?: number;
  maxZoom?: number;

  noDefaultControls?: boolean;
}

export default function SIAMap({
  initial,
  width,
  height,
  projection = 'ESPG:3857',

  noDefaultControls = false,
}: SIAMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  // const a = useGeographic();

  // console.log(a);

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }
    const olViewSetting = {
      zoom: 16,
      center: [126.9779451, 37.5662952],
      projection: 'EPSG:4326',
    };

    const ol = new Map({
      view: new View(olViewSetting),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
    });

    ol.setTarget(mapRef.current);
  }, []);

  // useEffect(() => {
  //   if (mapRef.current === null) {
  //     return;
  //   }

  //   const ol = new Map({
  //     controls: noDefaultControls ? [] : undefined,
  //     view: new View({
  //       zoom: 16,
  //       center: [0.9779451, 37.5662952],
  //       projection,
  //     }),
  //   });

  //   ol.setTarget(mapRef.current);
  // }, []);

  return <div id="map" ref={mapRef} />;
}

// const mapElement = useRef<HTMLDivElement | null>(null)

// useEffect(() => {
//   if (mapElement.current) {
//     const initMap = new Map({
//       target: mapElement.current,
//       layers: [
//         new TileLayer({
//           source: new OSM(),
//         }),
//       ],
//       view: new View(olViewSetting),
//     })
//   }
// }, [])

// return <div id="map" ref={mapElement} />
