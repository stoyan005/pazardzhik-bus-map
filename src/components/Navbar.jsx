import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
	return (
		<nav className={styles.nav}>
			<h1 className={styles.logo}>Pazardzhik Transit</h1>
			<div className={styles.linksContainer}>
				<Link to="/" className={styles.link}>
					Home
				</Link>
				<Link to="/map" className={styles.link}>
					Map
				</Link>
			</div>
		</nav>
	);
}
