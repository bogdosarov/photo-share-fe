import React from 'react'
import PropTypes from 'prop-types'

import styles from 'components/Input/Input.module.scss'

export const Input = ({ value, HandleChenge, placeholder, type = 'text' }) => (
  <input
    className={styles.input}
    value={value}
    type={type}
    placeholder={placeholder}
    onChange={({ target: { value } }) => HandleChenge(value)}
  />
)

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  HandleChenge: PropTypes.func.isRequired,
  type: PropTypes.string,
}

// function HandleChange(text) {
//   console.log(text)
// }
