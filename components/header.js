import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import styles from "../styles/header.module.css"
import { handleResponse} from "../helpers/api"
import { server } from '../config'

import axios from 'axios'

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <header>
      <div className={styles.signedInStatus}>
        <p
          className={`nojs-show ${
            !session && loading ? styles.loading : styles.loaded
          }`}
        >
          {!session && (
            <>
              <span className={styles.notSignedInText}>
                You are not signed in
              </span>
              <a
                href={`/api/auth/signin`}
                className={styles.buttonPrimary}
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >
                Sign in
              </a>
            </>
          )}
          {session?.user  
           && (
            axios.post(`${server}/api/dashboard`, 
            { session } ).then(handleResponse) ) && (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className={styles.avatar}
                />
              )}
              <span className={styles.signedInText}>
                <strong>{session.user.email ?? session.user.name}</strong>
              </span>
              <a
                href={`/api/auth/signout`}
                className={styles.button}
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </a>
            </>
          )}
        </p>
      </div>
      <div className={styles.mainHead}>
         <h1>Allinate </h1>
      </div>
      <div className={styles.mainHead}>
      <h3><em>Information Marketplace</em></h3>
      </div>
      <nav>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href="/">Home </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/get-surveys">Provide Information</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/create-surveys">Ask for Information</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/me">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}