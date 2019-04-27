import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'redux'

import { AuthManagerInstance } from 'utils/auth/AuthManager'
import { FormWrapper } from 'components/LoginLayout/FormWrapper'
import { Button } from 'components/Button/Button'
import { Input } from 'components/Input/Input'

import styles from './LoginPage.module.scss'

const LoginPageView = ({ history }) => {
  const [form, setValues] = useState({
    email: '',
    password: '',
  })
  const [isPending, setIsPending] = useState(false)

  const handleChange = fieldName => value => {
    setValues({
      ...form,
      [fieldName]: value,
    })
  }

  const handleLogin = () => {
    setIsPending(true)

    AuthManagerInstance.login(form)
      .then(() => history.replace('/'))
      .catch(() => setIsPending(false))
  }

  return (
    <FormWrapper>
      <div className={styles.form}>
        <Input
          value={form.email}
          placeholder="Phone number, username, or email"
          handleChange={handleChange('email')}
          name="username"
        />
        <Input
          value={form.password}
          placeholder="Password"
          handleChange={handleChange('password')}
          name="password"
          type="password"
        />
        <Button handleClick={handleLogin} isLoading={isPending}>
          Log in
        </Button>
        <div className={styles.separator}>
          <p>or</p>
        </div>
        <Link className={styles.forgotPassword} to="/reset">
          Forgot password?
        </Link>
      </div>
      <div className={styles.bottomField}>
        <p>
          Dont have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </FormWrapper>
  )
}

LoginPageView.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

export const LoginPage = compose(withRouter)(LoginPageView)
