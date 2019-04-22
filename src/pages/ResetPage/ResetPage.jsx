import React from 'react'
import { Link } from 'react-router-dom'

import { FormWrapper } from 'components/LoginLayout/FormWrapper'
import { Button } from 'components/Button/Button'
import { Input } from 'components/Input/Input'

import styles from './ResetPage.module.scss'

export class ResetPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      titleText: 'Trouble Logging In?',
      bodyText: "Enter your username or email and we'll send you a link to get back into your account.",
      resetField: '',
    }
  }

  handleChange = resetField => value => {
    this.setState({
      [resetField]: value,
    })
  }

  handleClick = () => {}

  render() {
    return (
      <FormWrapper>
        <div className={styles.form}>
          <div className={styles.titleReset}>
            <strong>{this.state.titleText}</strong>
            <p>{this.state.bodyText}</p>
          </div>
          <Input
            value={this.state.resetField}
            placeholder="Email, Phone, or Username"
            handleChenge={this.handleChange('resetField')}
            name="resetField"
          />
          <Button handleClick={this.handleClick}>Send Login Link</Button>

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
}
