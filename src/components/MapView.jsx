import { MapContainer, TileLayer } from 'react-leaflet';

export default function MapView({ children }) {
	return (
		<MapContainer
			center={[42.192, 24.333]}
			zoom={13}
			style={{ height: 'calc(100vh - 80px)', width: '100%' }}
		>
			<TileLayer
				attribution="&copy; OpenStreetMap contributors"
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{children}
		</MapContainer>
	);
}
