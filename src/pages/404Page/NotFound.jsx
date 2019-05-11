import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { PageHeader } from 'components/PageHeader/PageHeader'

import styles from './NotFound.module.scss'

export const NotFound = () => (
  <Fragment>
    <PageHeader />
    <div className={styles.NotFound}>
      <h2>Sorry, this page isnt available.</h2>
      <p>
        The link you followed may be broken, or the page may have been removed. <Link to="/">Go back to Instagram</Link>
        .
      </p>
    </div>
  </Fragment>
)
