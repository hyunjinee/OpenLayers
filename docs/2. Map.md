# Map

```tsx
import React, { useContext, useEffect, useRef, useState } from "react"
import { Coordinate } from "ol/coordinate"
import { Map, View, MapBrowserEvent, MapEvent } from "ol"
import { ProjectionLike, useGeographic } from "ol/proj"
import TileLayer from "ol/layer/Tile"
import OSM from "ol/source/OSM"

import { ScaleLine, defaults as defaultControls } from "ol/control.js"
import { getPointResolution, get as getProjection, transform } from "ol/proj.js"
import { MapContext } from "./MapContext"

export interface SIAView {
  zoom: number
  resolution?: number
  center: Coordinate
}

export interface SIAMapProps {
  initial: SIAView

  width?: number | string
  height?: number | string

  projection?: ProjectionLike

  minZoom?: number
  maxZoom?: number

  onClick?: (event: MapBrowserEvent<UIEvent>) => boolean | void

  noDefaultControls?: boolean

  children?: React.ReactNode
}

export default function SIAMap({
  initial,
  width,
  height,
  projection = "EPSG:3857",

  noDefaultControls = false,
  children,
}: SIAMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<Map | null>(null)

  useEffect(() => {
    const map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        ...initial,
        projection,
      }),
    })

    setMap(map)
    map.setTarget(mapRef.current as HTMLDivElement)

    return () => map.setTarget(undefined)
  }, [])

  return (
    <MapContext.Provider value={map}>
      <div id="map" ref={mapRef}>
        {children}
      </div>
    </MapContext.Provider>
  )
}
```
