import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MapPage from './pages/MapPage';
import TrolleyMap from './pages/TrolleyMap';
import './global.css';

export default function App() {
	return (
		<Router>
			<div className="app-layout">
				<Navbar />

				<main className="app-content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/bus-map" element={<MapPage />} />
						<Route path="/trolley-map" element={<TrolleyMap />} />
					</Routes>
				</main>

				<Footer />
			</div>
		</Router>
	);
}
