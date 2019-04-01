import React from 'react'
import { Link } from 'react-router-dom'

import styles from './LoginLayout.module.scss'
import logo from './assets/logo.png'

export const LoginLayout = state => (
  <div className={styles.main_field}>
    <Link to="/" className={styles.logo}>
      <img src={logo} alt="Logo" />
    </Link>
    {state.children}
  </div>
)
