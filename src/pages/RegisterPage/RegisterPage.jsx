import React from 'react'
import { Link } from 'react-router-dom'

import { LoginLayout } from 'components/LoginLayout/LoginLayout'

import styles from './RegisterPage.module.scss'

export default class RegisterPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      email: '',
      userName: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    // console.log(this.state)
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <LoginLayout>
          <form onSubmit={this.handleSubmit} className={styles.form}>
            <input
              name="firstName"
              placeholder="Mobile Number or Email"
              value={this.state.firstName}
              onChange={this.handleChange}
              required
            />
            <input
              name="email"
              placeholder="Last name"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <input
              name="userName"
              placeholder="Username"
              value={this.state.userName}
              onChange={this.handleChange}
              required
            />
            <input
              name="password"
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <input className={styles.submit} type="submit" />
          </form>
        </LoginLayout>
        <div className={styles.bottom_field}>
          <p>
            Have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    )
  }
}
