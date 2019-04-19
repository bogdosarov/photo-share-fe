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
            handleChenge={this.handleChange('firstName')}
            name="firstName"
          />
          <Input value={this.state.email} placeholder="Email" handleChenge={this.handleChange('email')} name="email" />
          <Input
            value={this.state.userName}
            placeholder="Username"
            handleChenge={this.handleChange('userName')}
            name="username"
          />
          <Input
            value={this.state.password}
            placeholder="Password"
            handleChenge={this.handleChange('password')}
            name="password"
          />
          <Button handleClick={this.handleClick}>Sing us</Button>
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
