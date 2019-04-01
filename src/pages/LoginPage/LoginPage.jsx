import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { LoginLayout } from 'components/LoginLayout/LoginLayout'

import styles from './LoginPage.module.scss'

export const LoginPage = () => {
  const [form, setValues] = useState({
    username: '',
    password: '',
  })

  const handleSubmit = e => {
    e.preventDefault()

    // console.log(form)
  }

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className={styles.wrapper}>
      <LoginLayout>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            value={form.username}
            name="username"
            onChange={updateField}
            placeholder={'Phone number, username, or email'}
            required
          />
          <input
            value={form.password}
            name="password"
            type="password"
            onChange={updateField}
            placeholder={'Password'}
            required
          />
          <input className={styles.submit} type="submit" />
        </form>
        <div className={styles.separator}>
          <p>or</p>
        </div>
        <p className={styles.forgot_password}>Forgot password?</p>
      </LoginLayout>
      <div className={styles.bottom_field}>
        <p>
          Dont have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  )
}
