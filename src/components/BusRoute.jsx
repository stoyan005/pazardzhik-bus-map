import { Polyline } from "react-leaflet";

export default function BusRoute({ route }) {
  return (
    <Polyline
      positions={route.path}
      pathOptions={{
        color: route.color,
        weight: 5,
      }}
    />
  );
}
