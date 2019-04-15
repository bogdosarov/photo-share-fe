import React from 'react'
import PropTypes from 'prop-types'

import styles from 'components/Button/Button.module.scss'

export const Button = ({ HandleClick, buttonName = 'submit' }) => (
  <button className={styles.button} onClick={({ target: { value } }) => HandleClick(value)}>
    {buttonName}
  </button>
)

Button.propTypes = {
  buttonName: PropTypes.string,
  HandleClick: PropTypes.func.isRequired,
}
