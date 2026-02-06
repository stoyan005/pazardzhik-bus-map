import { Marker } from 'react-leaflet';
import L from 'leaflet';
import busStopImg from '../assets/bus-stop.png';
import styles from './BusStop.module.css';

const busStopIcon = new L.Icon({
	iconUrl: busStopImg,
	iconSize: [32, 32],
	iconAnchor: [16, 32],
});

export default function BusStop({ stop, routes, onStopClick }) {
	return (
		<Marker
			position={[stop.lat, stop.lng]}
			icon={busStopIcon}
			eventHandlers={{
				click: (e) => {
					e.originalEvent.stopPropagation();
					onStopClick(stop); // send full stop object
				},
			}}
		/>
	);
}
