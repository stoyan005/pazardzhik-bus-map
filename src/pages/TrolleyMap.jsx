import { useState } from 'react';
import MapView from '../components/MapView';
import BusStop from '../components/BusStop';
import TrolleyRoute from '../components/TrolleyRoute';
import trolleyStops from '../data/trolleyStops.json';
import trolleyRoutes from '../data/trolleyRoutes.json';
import { MapClickClear } from '../components/MapClickClear';
import BusStopPanel from '../components/BusStopPanel';

export default function TrolleyMap() {
	const [selectedStop, setSelectedStop] = useState(null);
	const [visibleRoutes, setVisibleRoutes] = useState([]);

	function handleStopClick(stop) {
		setSelectedStop(stop);
		setVisibleRoutes(stop.lines);
	}

	function clearSelection() {
		setSelectedStop(null);
		setVisibleRoutes([]);
	}

	return (
		<MapView>
			<MapClickClear onClear={clearSelection} />

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
				/>
			))}

			<BusStopPanel
				stop={selectedStop}
				routes={trolleyRoutes}
				onClose={clearSelection}
				linesLabel="Тролейбусни Линии"
			/>
		</MapView>
	);
}
