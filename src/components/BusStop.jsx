import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import routes from '../data/routes.json';
import busStopImg from '../assets/bus-stop.png';
import styles from './BusStop.module.css';

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
				<div className={styles.card}>
					<div className={styles.header}>{stop.name}</div>

					<div className={styles.label}>Автобусни Линии:</div>

					<div className={styles.lines}>
						{stop.lines.map((lineId) => {
							const route = routes.find(
								(r) => r.id.toString() === lineId.toString()
							);
							if (!route) return null;

							return (
								<div key={route.id} className={styles.lineItem}>
									<svg
										className={styles.busIcon}
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path d="M4 16c0 .88.39 1.67 1 2.22V20a1 1 0 0 0 2 0v-1h10v1a1 1 0 0 0 2 0v-1.78A3 3 0 0 0 20 16V7c0-5-5-5-8-5S4 2 4 7v9zm3.5 1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM6 12V7h12v5H6z" />
									</svg>

									<span
										className={styles.badge}
										style={{ backgroundColor: route.color }}
									>
										{route.id}
									</span>
								</div>
							);
						})}
					</div>
				</div>
			</Popup>
		</Marker>
	);
}
