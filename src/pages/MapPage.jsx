import MapView from '../components/MapView';
import BusStop from '../components/BusStop';
import BusRoute from '../components/BusRoute';
import stops from '../data/stops.json';
import routes from '../data/routes.json';
import { useState } from 'react';
import { MapClickClear } from '../components/MapClickClear';

export default function BusMap() {
	const [visibleRoutes, setVisibleRoutes] = useState([]);

	function handleStopClick(lines) {
		setVisibleRoutes(lines);
	}

	function clearRoutes() {
		setVisibleRoutes([]);
	}

	return (
		<MapView>
			<MapClickClear onClear={clearRoutes} />
			{routes
				.filter((r) => visibleRoutes.includes(r.id))
				.map((r) => (
					<BusRoute key={r.id} route={r} />
				))}
			{stops.map((s, i) => (
				<BusStop
					key={i}
					stop={s}
					routes={routes}
					onStopClick={handleStopClick}
					linesLabel="Автобусни Линии"
				/>
			))}
		</MapView>
	);
}
