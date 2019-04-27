import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FormWrapper } from 'components/LoginLayout/FormWrapper'
import { Button } from 'components/Button/Button'
import { Input } from 'components/Input/Input'

import styles from './ResetPage.module.scss'

export const ResetPage = () => {
  const bodyText = "Enter your username or email and we'll send you a link to get back into your account."
  const titleText = 'Trouble Logging In?'
  const [resetField, setResetField] = useState('')

  const handleChange = value => {
    setResetField(value)
  }

  const handleReset = () => {}

  return (
    <FormWrapper>
      <div className={styles.form}>
        <div className={styles.titleReset}>
          <strong>{titleText}</strong>
          <p>{bodyText}</p>
        </div>
        <Input
          value={resetField}
          placeholder="Email, Phone, or Username"
          handleChange={handleChange}
          name="resetField"
        />

        <Button handleClick={handleReset}>Send Login Link</Button>

        <div className={styles.separator}>
          <p>or</p>
        </div>
        <Link className={styles.linkReset} to="/register">
          <strong>Create New Account</strong>
        </Link>

        <div className={styles.bottomField}>
          <Link className={styles.linkReset} to="/login">
            <strong>Back To Login</strong>
          </Link>
        </div>
      </div>
    </FormWrapper>
  )
}
