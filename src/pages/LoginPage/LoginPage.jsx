import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FormWrapper } from 'components/LoginLayout/FormWrapper'
import { Button } from 'components/Button/Button'
import { Input } from 'components/Input/Input'

import styles from './LoginPage.module.scss'

export const LoginPage = () => {
  const [form, setValues] = useState({
    username: '',
    password: '',
  })

  const handleChange = fildName => value => {
    setValues({
      ...form,
      [fildName]: value,
    })
  }

  const handleSubmit = () => {}

  return (
    <FormWrapper>
      <div className={styles.form}>
        <Input
          value={form.username}
          placeholder="Phone number, username, or email"
          HandleChenge={handleChange('username')}
          name="username"
        />
        <Input value={form.password} placeholder="Password" HandleChenge={handleChange('password')} name="password" />
        <Button HandleClick={handleSubmit} buttonName={'Log in'} />
        <div className={styles.separator}>
          <p>or</p>
        </div>
        <p className={styles.forgot_password}>Forgot password?</p>
      </div>
      <div className={styles.bottom_field}>
        <p>
          Dont have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </FormWrapper>
  )
}
