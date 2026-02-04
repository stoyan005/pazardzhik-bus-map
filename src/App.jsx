import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MapPage from './pages/MapPage';

export default function App() {
	return (
		<Router>
			<div className="appLayout">
				<Navbar />

				<div className="appContent">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/map" element={<MapPage />} />
					</Routes>
				</div>
			</div>
			<Footer />
		</Router>
	);
}
