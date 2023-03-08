import React, { useContext, useEffect, useRef, useState } from 'react';
import { Coordinate } from 'ol/coordinate';
import { Map, View, MapBrowserEvent, MapEvent, Collection } from 'ol';
import { ProjectionLike, useGeographic } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import { ScaleLine, defaults as defaultControls } from 'ol/control.js';
import {
  getPointResolution,
  get as getProjection,
  transform,
} from 'ol/proj.js';
import { MapContext } from './MapContext';
import { Interaction } from 'ol/interaction';

export interface SIAView {
  zoom: number;
  resolution?: number;
  center: Coordinate;
  projection?: ProjectionLike;
}

export interface SIAMapProps {
  initial?: SIAView;

  width?: number | string;
  height?: number | string;

  minZoom?: number;
  maxZoom?: number;

  layers?: any;

  onClick?: (event: MapBrowserEvent<UIEvent>) => boolean | void;

  noDefaultControls?: boolean;

  interactions?: Collection<Interaction>;

  children?: React.ReactNode;
}

export default function SIAMap({
  initial = {
    zoom: 5,
    center: [0, 0],
    projection: 'EPSG:3857',
  },
  width,
  height,

  layers,

  interactions,

  noDefaultControls = false,
  children,
}: SIAMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    const map = new Map({
      layers,
      view: new View({
        ...initial,
      }),
      interactions,
    });

    setMap(map);
    map.setTarget(mapRef.current as HTMLDivElement);

    return () => map.setTarget(undefined);
  }, []);

  return (
    <MapContext.Provider value={map}>
      <div id="map" ref={mapRef}>
        {children}
      </div>
    </MapContext.Provider>
  );
}
