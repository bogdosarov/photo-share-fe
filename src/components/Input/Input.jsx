import React from 'react'
import PropTypes from 'prop-types'

import styles from 'components/Input/Input.module.scss'

export const Input = ({ value, handleChenge, placeholder, type = 'text' }) => (
  <input
    className={styles.input}
    value={value}
    type={type}
    placeholder={placeholder}
    onChange={({ target: { value } }) => handleChenge(value)}
  />
)

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleChenge: PropTypes.func.isRequired,
  type: PropTypes.string,
}
