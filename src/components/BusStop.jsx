import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import busStopImg from '../assets/bus-stop.png';

const busStopicon = new L.Icon({
	iconUrl: busStopImg,
	iconSize: [32, 32], // size of the icon //
	iconAnchor: [16, 32], // bottom center touches the map itself //
	popupAnchor: [0, -32], // popup opens above the icon to display information (will change later) //
	className: '',
});

export default function BusStop({ stop, onStopClick }) {
	return (
		<Marker
			position={[stop.lat, stop.lng]}
			icon={busStopicon}
			eventHandlers={{
				click: (e) => {
					e.originalEvent.stopPropagation(); // prevents map click //
					onStopClick(stop.lines); // shows the route //
				},
			}}
		>
			<Popup>
				<strong>{stop.name}</strong>
				<br />
				Lines: {stop.lines.join(', ')}
			</Popup>
		</Marker>
	);
}
