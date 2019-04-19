import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import styles from './FormWrapper.module.scss'
import logo from './assets/logo.png'

export const FormWrapper = props => (
  <div className={styles.formWrapper}>
    <Link to="/" className={styles.logo}>
      <img src={logo} alt="Logo" />
    </Link>
    {props.children}
  </div>
)

FormWrapper.propTypes = {
  children: PropTypes.node,
}
