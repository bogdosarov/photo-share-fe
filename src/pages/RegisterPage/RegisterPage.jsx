import React from 'react'
import { Link } from 'react-router-dom'

import { FormWrapper } from 'components/LoginLayout/FormWrapper'
import { Button } from 'components/Button/Button'
import { Input } from 'components/Input/Input'

import styles from './RegisterPage.module.scss'

export class RegisterPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      email: '',
      userName: '',
      password: '',
    }
  }

  handleChange = fildName => value => {
    this.setState({
      [fildName]: value,
    })
  }

  handleClick = () => {}

  render() {
    return (
      <FormWrapper>
        <div className={styles.form}>
          <Input
            value={this.state.firstName}
            placeholder="First Name"
            HandleChenge={this.handleChange('firstName')}
            name="firstName"
          />
          <Input value={this.state.email} placeholder="Email" HandleChenge={this.handleChange('email')} name="email" />
          <Input
            value={this.state.userName}
            placeholder="Username"
            HandleChenge={this.handleChange('userName')}
            name="username"
          />
          <Input
            value={this.state.password}
            placeholder="Password"
            HandleChenge={this.handleChange('password')}
            name="password"
          />
          <Button HandleClick={this.handleClick} buttonName="Sing us" />
        </div>
        <div className={styles.bottom_field}>
          <p>
            Have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </FormWrapper>
    )
  }
}
