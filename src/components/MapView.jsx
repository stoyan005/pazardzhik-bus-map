import { MapContainer, TileLayer } from 'react-leaflet';

export default function MapView({ children }) {
	return (
		<MapContainer
			center={[42.192, 24.333]}
			zoom={13}
			style={{ height: '100vh', width: '100%' }} // FULL SCREEN
		>
			<TileLayer
				attribution="&copy; OpenStreetMap contributors"
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{children}
		</MapContainer>
	);
}
