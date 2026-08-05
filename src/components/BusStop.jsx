import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import busStopImg from '../assets/bus-stop.png';
import styles from './BusStop.module.css';

const busStopIcon = new L.Icon({
	iconUrl: busStopImg,
	iconSize: [32, 32],
	iconAnchor: [16, 32],
	popupAnchor: [0, -32],
});

export default function BusStop({
	stop,
	routes,
	selectedRoute,
	onStopClick,
	onRouteSelect,
	linesLabel = 'Линии',
}) {
	function handleMarkerClick(event) {
		event.originalEvent?.stopPropagation();

		onStopClick(stop.lines);
	}

	function handleRouteClick(event, routeId) {
		event.preventDefault();
		event.stopPropagation();

		onRouteSelect(routeId);
	}

	return (
		<Marker
			position={[stop.lat, stop.lng]}
			icon={busStopIcon}
			eventHandlers={{
				click: handleMarkerClick,
			}}
		>
			<Popup className={styles.popup}>
				<article className={styles.card}>
					<header className={styles.header}>
						<div className={styles.iconWrapper}>
							<svg
								className={styles.headerIcon}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								aria-hidden="true"
							>
								<path d="M4 16c0 .88.39 1.67 1 2.22V20a1 1 0 0 0 2 0v-1h10v1a1 1 0 0 0 2 0v-1.78A3 3 0 0 0 20 16V7c0-5-5-5-8-5S4 2 4 7v9zm3.5 1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM6 12V7h12v5H6z" />
							</svg>
						</div>

						<div>
							<p className={styles.eyebrow}>Автобусна спирка</p>
							<h3 className={styles.title}>{stop.name}</h3>
						</div>
					</header>

					<div className={styles.divider} />

					<div className={styles.routesSection}>
						<p className={styles.label}>{linesLabel}</p>

						<div className={styles.lines}>
							{stop.lines.map((lineId) => {
								const route = routes.find(
									(candidate) => String(candidate.id) === String(lineId)
								);

								if (!route) {
									return null;
								}

								const isSelected =
									String(selectedRoute) === String(route.id);

								const isDimmed = selectedRoute !== null && !isSelected;

								return (
									<button
										key={route.id}
										type="button"
										className={`${styles.routeButton} ${
											isSelected ? styles.selected : ''
										} ${isDimmed ? styles.dimmed : ''}`}
										style={{
											'--route-color': route.color,
										}}
										onClick={(event) =>
											handleRouteClick(event, route.id)
										}
										aria-pressed={isSelected}
										aria-label={`Покажи автобусна линия ${route.id}`}
									>
										<span className={styles.routeBadge}>
											{route.id}
										</span>

										<span className={styles.routeText}>
											Линия {route.id}
										</span>
									</button>
								);
							})}
						</div>

						<p className={styles.hint}>
							Изберете линия, за да откроите маршрута ѝ.
						</p>
					</div>
				</article>
			</Popup>
		</Marker>
	);
}
