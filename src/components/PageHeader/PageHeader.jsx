import React from 'react'
import { Link } from 'react-router-dom'

import { NavBar } from 'components/Navbar/Navbar'

import styles from './PageHeader.module.scss'
import logo from './assets/logo.png'

export const PageHeader = () => (
  <header>
    <div className={styles.conteiner}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="Logo" />
      </Link>
      <NavBar />
    </div>
  </header>
)
