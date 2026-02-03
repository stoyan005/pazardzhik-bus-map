import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
	return (
		<nav className={styles.nav}>
			<h1 className={styles.logo}>Пазарджик Трансит</h1>
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
