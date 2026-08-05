import { Polyline } from 'react-leaflet';

export default function BusRoute({ route, isSelected, hasSelectedRoute }) {
	const opacity = hasSelectedRoute ? (isSelected ? 1 : 0.18) : 0.75;

	const weight = hasSelectedRoute && isSelected ? 7 : 5;

	return (
		<Polyline
			positions={route.path}
			pathOptions={{
				color: route.color,
				opacity,
				weight,
			}}
		/>
	);
}
