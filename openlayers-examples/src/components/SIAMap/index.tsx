import React, { useEffect, useRef } from 'react';
import { Coordinate } from 'ol/coordinate';
import { Map, View, MapBrowserEvent, MapEvent } from 'ol';
import { ProjectionLike, useGeographic } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import { ScaleLine, defaults as defaultControls } from 'ol/control.js';
import {
  getPointResolution,
  get as getProjection,
  transform,
} from 'ol/proj.js';

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

  onClick?: (event: MapBrowserEvent<UIEvent>) => boolean | void;

  noDefaultControls?: boolean;

  children?: React.ReactNode;
}

export const MapContext = React.createContext<Map | undefined>(undefined);

export default function SIAMap({
  initial,
  width,
  height,
  projection = 'ESPG:3857',

  noDefaultControls = false,
  children,
}: SIAMapProps) {
  // const mapRef = useRef<HTMLDivElement>(null);

  // const a = useGeographic();

  // console.log(a);

  const [map, setMap] = React.useState<Map>();

  useEffect(() => {
    const map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'map',
      view: new View({
        ...initial,
        projection,
      }),
    });

    setMap(map);
  }, []);

  return (
    <MapContext.Provider value={map}>
      <div id="map">{children}</div>
    </MapContext.Provider>
  );
}
