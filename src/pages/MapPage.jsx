import MapView from '../components/MapView';
import BusStop from '../components/BusStop';
import BusRoute from '../components/BusRoute';
import BusStopPanel from '../components/BusStopPanel';
import stops from '../data/stops.json';
import routes from '../data/routes.json';
import { useState } from 'react';
import { MapClickClear } from '../components/MapClickClear';

export default function BusMap() {
	const [selectedStop, setSelectedStop] = useState(null);

	function handleStopClick(stop) {
		setSelectedStop(stop);
	}

	function clearRoutes() {
		setSelectedStop(null);
	}

	return (
		<>
			<MapView>
				<MapClickClear onClear={clearRoutes} />

				{selectedStop &&
					selectedStop.lines.map((lineId) => {
						const r = routes.find((r) => r.id.toString() === lineId.toString());
						if (!r) return null;
						return <BusRoute key={r.id} route={r} />;
					})}

				{stops.map((s, i) => (
					<BusStop key={i} stop={s} onStopClick={handleStopClick} />
				))}
			</MapView>

			<BusStopPanel
				stop={selectedStop}
				routes={routes}
				onClose={() => setSelectedStop(null)}
			/>
		</>
	);
}
