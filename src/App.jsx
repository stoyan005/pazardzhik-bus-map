import { useState } from "react";
import { useMapEvents } from "react-leaflet";

import MapView from "./components/MapView";
import BusStop from "./components/BusStop";
import BusRoute from "./components/BusRoute";

import stops from "./data/stops.json";
import routes from "./data/routes.json";

function MapClickClear({ onClear }) {
  useMapEvents({
    click: () => {
      onClear();
    },
  });
  return null;
}

export default function App() {
  const [visibleRoutes, setVisibleRoutes] = useState([]);

  function handleStopClick(lines) {
    setVisibleRoutes(lines);
  }

  function clearRoutes() {
    setVisibleRoutes([]);
  }

  return (
    <MapView>
      {/* Detect map background clicks */}
      <MapClickClear onClear={clearRoutes} />

      {/* Draw selected routes */}
      {routes
        .filter((r) => visibleRoutes.includes(r.id))
        .map((r) => (
          <BusRoute key={r.id} route={r} />
        ))}

      {/* Stops */}
      {stops.map((s, i) => (
        <BusStop key={i} stop={s} onStopClick={handleStopClick} />
      ))}
    </MapView>
  );
}
