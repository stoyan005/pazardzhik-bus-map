import MapView from '../components/MapView';
import BusStop from '../components/BusStop';
import TrolleyRoute from '../components/TrolleyRoute';
import trolleyStops from '../data/trolleyStops.json';
import trolleyRoutes from '../data/trolleyRoutes.json';
import { useState } from 'react';
import { MapClickClear } from '../components/MapClickClear';

export default function TrolleyMap() {
	const [visibleRoutes, setVisibleRoutes] = useState([]);
	const [selectedRoute, setSelectedRoute] = useState(null);

	function handleStopClick(lines) {
		setVisibleRoutes(lines.map(String));
		setSelectedRoute(null);
	}

	function handleRouteSelect(routeId) {
		const id = String(routeId);

		setSelectedRoute((current) => (current === id ? null : id));
	}

	function clearRoutes() {
		setVisibleRoutes([]);
		setSelectedRoute(null);
	}

	return (
		<MapView>
			<MapClickClear onClear={clearRoutes} />

			{trolleyRoutes
				.filter((route) => visibleRoutes.includes(String(route.id)))
				.map((route) => (
					<TrolleyRoute
						key={route.id}
						route={route}
						isSelected={
							selectedRoute === null || selectedRoute === String(route.id)
						}
						hasSelectedRoute={selectedRoute !== null}
					/>
				))}

			{trolleyStops.map((stop, index) => (
				<BusStop
					key={index}
					stop={stop}
					routes={trolleyRoutes}
					selectedRoute={selectedRoute}
					onStopClick={handleStopClick}
					onRouteSelect={handleRouteSelect}
					linesLabel="Тролейбусни линии"
				/>
			))}
		</MapView>
	);
}
