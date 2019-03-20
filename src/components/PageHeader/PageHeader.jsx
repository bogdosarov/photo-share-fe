import React from 'react'
import { Link } from 'react-router-dom'

import styles from './PageHeader.module.scss'
import logo from './assets/logo.png'

import { NavBar } from 'components/Navbar/Navbar'

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
