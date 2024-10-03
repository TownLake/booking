import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rural Cabin in Portugal - Booking Experience</title>
        <meta name="description" content="Book your stay at our beautiful rural cabin in Portugal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Our Rural Cabin in Portugal
        </h1>

        <p className={styles.description}>
          Experience the tranquility of the Portuguese countryside
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Book Now &rarr;</h2>
            <p>Start your journey to relaxation.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Explore &rarr;</h2>
            <p>Discover the beauty of our cabin and surroundings.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>About Us &rarr;</h2>
            <p>Learn about our story and commitment to hospitality.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Contact &rarr;</h2>
            <p>Get in touch with any questions or special requests.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          © 2024 Rural Cabin Portugal. All rights reserved.
        </a>
      </footer>
    </div>
  )
}