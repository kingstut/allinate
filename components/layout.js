import Header from "./header"
import styles from "../styles/layout.module.css"

export default function Layout({ children }) {
  return (
    < >
      <Header />
      <main className={styles.container}>{children}</main>
    </>
  )
}