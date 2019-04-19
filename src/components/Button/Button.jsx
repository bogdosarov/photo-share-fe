import React from 'react'
import PropTypes from 'prop-types'

import styles from 'components/Button/Button.module.scss'

export const Button = ({ handleClick, children }) => (
  <button className={styles.button} onClick={({ target: { value } }) => handleClick(value)}>
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node,
  handleClick: PropTypes.func.isRequired,
}
