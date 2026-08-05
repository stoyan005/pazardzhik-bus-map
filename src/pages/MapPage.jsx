import { useState } from 'react';
import MapView from '../components/MapView';
import BusStop from '../components/BusStop';
import BusRoute from '../components/BusRoute';
import { MapClickClear } from '../components/MapClickClear';

import stops from '../data/stops.json';
import routes from '../data/routes.json';

export default function BusMap() {
	const [visibleRoutes, setVisibleRoutes] = useState([]);
	const [selectedRoute, setSelectedRoute] = useState(null);

	function handleStopClick(lines) {
		const normalizedLines = lines.map(String);

		setVisibleRoutes(normalizedLines);
		setSelectedRoute(null);
	}

	function handleRouteSelect(routeId) {
		const normalizedRouteId = String(routeId);

		setSelectedRoute((currentRoute) =>
			currentRoute === normalizedRouteId ? null : normalizedRouteId
		);
	}

	function clearRoutes() {
		setVisibleRoutes([]);
		setSelectedRoute(null);
	}

	return (
		<MapView>
			<MapClickClear onClear={clearRoutes} />

			{routes
				.filter((route) => visibleRoutes.includes(String(route.id)))
				.map((route) => (
					<BusRoute
						key={route.id}
						route={route}
						isSelected={
							selectedRoute === null || selectedRoute === String(route.id)
						}
						hasSelectedRoute={selectedRoute !== null}
					/>
				))}

			{stops.map((stop) => (
				<BusStop
					key={stop.id ?? `${stop.lat}-${stop.lng}`}
					stop={stop}
					routes={routes}
					selectedRoute={selectedRoute}
					onStopClick={handleStopClick}
					onRouteSelect={handleRouteSelect}
					linesLabel="Автобусни линии"
				/>
			))}
		</MapView>
	);
}
