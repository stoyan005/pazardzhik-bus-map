import { useMapEvents } from 'react-leaflet';

export function MapClickClear({ onClear }) {
	useMapEvents({
		click: (e) => {
			const el = e.originalEvent.target;

			if (el.closest('.leaflet-container')) {
				if (
					el.closest('.leaflet-marker-icon') ||
					el.closest('.leaflet-popup') ||
					el.closest('.leaflet-control')
				) {
					return;
				}

				onClear();
			}
		},
	});

	return null;
}
