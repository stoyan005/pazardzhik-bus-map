import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.main_content}>
				<p>
					&copy; {new Date().getFullYear()} Пазарджик Транзит. Всички права запазени.
				</p>
				<p>За всички граждани на Пазарджик</p>

				<div className={styles.legal}>
					<p>Правила и Условия</p>
					<p>Политика за Поверителност</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
