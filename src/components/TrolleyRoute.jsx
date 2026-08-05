import { Polyline } from 'react-leaflet';

export default function TrolleyRoute({ route, isSelected, hasSelectedRoute }) {
	const opacity = hasSelectedRoute ? (isSelected ? 1 : 0.15) : 0.75;

	return (
		<Polyline
			positions={route.path}
			pathOptions={{
				color: route.color,
				opacity,
				weight: isSelected ? 7 : 5,
			}}
		/>
	);
}
