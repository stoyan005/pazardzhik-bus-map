import { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../assets/logo.png';

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className={styles.nav}>
			<Link to="/">
				<img src={logo} alt="Пазарджик Трансит" className={styles.logo} />
			</Link>

			<div className={styles.linksContainer}>
				<Link to="/" className={styles.link}>
					Начало
				</Link>
				<Link to="/bus-map" className={styles.link}>
					Карта за автобуси
				</Link>
				<Link to="/trolley-map" className={styles.link}>
					Карта за тролей
				</Link>
			</div>

			<div className={styles.hamburger}>
				<Hamburger toggled={menuOpen} toggle={setMenuOpen} />
			</div>

			{menuOpen && (
				<div className={styles.mobileMenu}>
					<Link to="/" className={styles.link} onClick={() => setMenuOpen(false)}>
						Начало
					</Link>
					<Link
						to="/bus-map"
						className={styles.link}
						onClick={() => setMenuOpen(false)}
					>
						Карта за автобуси
					</Link>
					<Link
						to="/trolley-map"
						className={styles.link}
						onClick={() => setMenuOpen(false)}
					>
						Карта за тролей
					</Link>
				</div>
			)}
		</nav>
	);
}
