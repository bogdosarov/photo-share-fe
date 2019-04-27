import React from 'react'
import PropTypes from 'prop-types'

import styles from 'components/Input/Input.module.scss'

export const Input = ({ value, handleChange, placeholder, type = 'text' }) => (
  <input
    className={styles.input}
    value={value}
    type={type}
    placeholder={placeholder}
    onChange={({ target: { value } }) => handleChange(value)}
  />
)

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string,
}
