import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import busStopImg from "../assets/bus-stop.png"; // your PNG icon

// Create a Leaflet icon using the PNG
const busStopIcon = new L.Icon({
  iconUrl: busStopImg,
  iconSize: [32, 32], // size of the icon in pixels
  iconAnchor: [16, 32], // bottom center touches the map
  popupAnchor: [0, -32], // popup opens above the icon
  className: "",
});

export default function BusStop({ stop, onStopClick }) {
  return (
    <Marker
      position={[stop.lat, stop.lng]}
      icon={busStopIcon}
      eventHandlers={{
        click: (e) => {
          e.originalEvent.stopPropagation(); // prevent map click
          onStopClick(stop.lines); // show route
        },
      }}
    >
      <Popup>
        <strong>{stop.name}</strong>
        <br />
        Lines: {stop.lines.join(", ")}
      </Popup>
    </Marker>
  );
}
