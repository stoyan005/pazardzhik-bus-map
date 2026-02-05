import { Polyline } from 'react-leaflet';

export default function TrolleyRoute({ route }) {
	return (
		<Polyline
			positions={route.path}
			pathOptions={{
				color: route.color.replace(')', ', 0.5)').replace('rgb', 'rgba'),
				weight: 5,
			}}
		/>
	);
}
