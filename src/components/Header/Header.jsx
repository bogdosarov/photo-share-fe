import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.scss'
import logo from '../../img/logo.png'

import NavBar from '../Navbar/Navbar'

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className={styles.conteiner}>
          <Link className={styles.logo} to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <NavBar />
        </div>
      </header>
    )
  }
}

export default Header
