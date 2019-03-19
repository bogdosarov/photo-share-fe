import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Navbar.module.scss'

export const NavBar = () => (
  <nav className={styles.nav}>
    <ul>
      <li>
        <Link to="login" className={styles.login}>
          login
        </Link>
      </li>
      <li>
        <Link to="Registration">Registration</Link>
      </li>
    </ul>
  </nav>
)
