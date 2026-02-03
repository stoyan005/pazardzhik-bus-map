import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../assets/logo.png';

export default function Navbar() {
	return (
		<nav className={styles.nav}>
			<Link to="/">
				<img src={logo} alt="Пазарджик Трансит" className={styles.logo} />
			</Link>
			<div className={styles.linksContainer}>
				<Link to="/" className={styles.link}>
					Начало
				</Link>
				<Link to="/map" className={styles.link}>
					Карта за автобуси
				</Link>
				<Link to="/map" className={styles.link}>
					Карта за тролей
				</Link>
			</div>
		</nav>
	);
}
