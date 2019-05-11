import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import PropTypes from 'prop-types'

import { API } from 'utils/api/api'
import { AuthManagerInstance } from 'utils/auth/AuthManager'
import { FormWrapper } from 'components/LoginLayout/FormWrapper'
import { Button } from 'components/Button/Button'
import { Input } from 'components/Input/Input'

import styles from './RegisterPage.module.scss'

export class RegisterPageView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fullName: '',
      userName: '',
      email: '',
      password: '',
    }
  }

  handleChange = fildName => value => {
    this.setState({
      [fildName]: value,
    })
  }

  handleSign = async () => {
    try {
      await API.post('/signup', this.state)
      await AuthManagerInstance.login({ email: this.state.email, password: this.state.password })
      this.props.history.push('/')
    } catch (err) {
      // eslint-disable-next-line
      console.log('Failed to create account') // todo: add toast message.
    }
  }

  render() {
    return (
      <FormWrapper>
        <div className={styles.form}>
          <Input
            value={this.state.firstName}
            placeholder="Full Name"
            handleChange={this.handleChange('fullName')}
            name="fullName"
          />
          <Input value={this.state.email} placeholder="Email" handleChange={this.handleChange('email')} name="email" />
          <Input
            value={this.state.userName}
            placeholder="Username"
            handleChange={this.handleChange('userName')}
            name="username"
          />
          <Input
            value={this.state.password}
            placeholder="Password"
            handleChange={this.handleChange('password')}
            name="password"
            type="password"
          />
          <Button handleClick={this.handleSign}>Sing us</Button>
        </div>
        <div className={styles.bottomField}>
          <p>
            Have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </FormWrapper>
    )
  }
}

RegisterPageView.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

export const RegisterPage = compose(withRouter)(RegisterPageView)
