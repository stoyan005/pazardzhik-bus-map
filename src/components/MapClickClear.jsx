import { useMapEvents } from "react-leaflet";

export function MapClickClear({ onClear }) {
  useMapEvents({
    click: () => {
      onClear();
    },
  });

  return null;
}
