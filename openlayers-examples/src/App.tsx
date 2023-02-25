import { useEffect, useRef } from "react"
import { Map, View } from "ol"
import TileLayer from "ol/layer/Tile"
import VectorLayer from "ol/layer/Vector"
import VectorSource from "ol/source/Vector"
import OSM from "ol/source/OSM"

const olViewSetting = {
  zoom: 16,
  center: [126.9779451, 37.5662952],
  projection: "EPSG:4326",
}

function App() {
  const mapElement = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (mapElement.current) {
      const initMap = new Map({
        target: mapElement.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View(olViewSetting),
      })
    }
  }, [])

  return <div id="map" ref={mapElement} />
}

export default App
