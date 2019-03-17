import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Navbar.module.scss'

class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="About">About</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
