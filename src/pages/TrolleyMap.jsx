import MapView from '../components/MapView';
import BusStop from '../components/BusStop';
import TrolleyRoute from '../components/TrolleyRoute';
import trolleyStops from '../data/trolleyStops.json';
import trolleyRoutes from '../data/trolleyRoutes.json';
import { useState } from 'react';
import { MapClickClear } from '../components/MapClickClear';

export default function TrolleyMap() {
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
			{trolleyRoutes
				.filter((r) => visibleRoutes.includes(r.id))
				.map((r) => (
					<TrolleyRoute key={r.id} route={r} />
				))}
			{trolleyStops.map((s, i) => (
				<BusStop
					key={i}
					stop={s}
					routes={trolleyRoutes}
					onStopClick={handleStopClick}
					linesLabel="Тролейбусни Линии"
				/>
			))}
		</MapView>
	);
}
