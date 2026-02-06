import styles from './Home.module.css';
import BusBtn from '../components/Buttons/BusBtn';
import TrolleyBtn from '../components/Buttons/TrolleyBtn';

export default function Home() {
	return (
		<>
			<main className={styles.hero}>
				<div className={styles.overlay}>
					<div className={styles.content}>
						<h1 className={styles.title}>Пазарджик - достъпен за всички!</h1>
						<p className={styles.subtitle}>
							Пазарджик за всеки: Проектиране на улици и пространства, където
							всяка стъпка е достъпна и всеки гражданин може да се движи
							свободно.
						</p>
						<div className={styles.buttonGroup}>
							<BusBtn />
							<TrolleyBtn />
						</div>

						<div className={styles.infoBoxes}>
							<p>
								<svg
									className={styles.iconInfo}
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<circle cx="6" cy="19" r="3" />
									<path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
									<circle cx="18" cy="5" r="3" />
								</svg>
								Потребители на достъп
							</p>

							<p>
								<svg
									className={styles.iconInfo}
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
									<circle cx="7" cy="17" r="2" />
									<path d="M9 17h6" />
									<circle cx="17" cy="17" r="2" />
								</svg>
								Хора в движение
							</p>
							<p>
								<svg
									className={styles.iconInfo}
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<circle cx="16" cy="4" r="1" />
									<path d="m18 19 1-7-6 1" />
									<path d="m5 8 3-3 5.5 3-2.36 3.5" />
									<path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
									<path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
								</svg>
								Всеки с нужда от лесен достъп
							</p>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
