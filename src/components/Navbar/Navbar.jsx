import React from 'react'
import { Link } from 'react-router-dom'

import { AuthManagerInstance } from 'utils/auth/AuthManager'

import styles from './Navbar.module.scss'

const renderGuestLinks = () => (
  <ul>
    <li>
      <Link to="/login" className={styles.login}>
        Login
      </Link>
    </li>
    <li>
      <Link to="/register">Registration</Link>
    </li>
  </ul>
)

const renderUserLinks = () => (
  <ul>
    <li>
      <Link to="/" onClick={() => AuthManagerInstance.logout()}>
        Logout
      </Link>
    </li>
    <li>
      <Link to="/account">Account</Link>
    </li>
  </ul>
)

export const NavBar = () => {
  const isAuthenticated = AuthManagerInstance.authenticated

  return <nav className={styles.nav}>{isAuthenticated ? renderUserLinks() : renderGuestLinks()}</nav>
}
