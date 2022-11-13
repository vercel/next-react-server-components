import Header from '../components/header'

import '../styles/globals.css'
import styles from '../styles/RootLayout.module.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className={styles.main}>
          <Header />
          <div className={styles.page}>{children}</div>
        </main>
      </body>
    </html>
  )
}
