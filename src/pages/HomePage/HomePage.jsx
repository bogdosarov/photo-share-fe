import React, { Fragment } from 'react'

import { PostList } from 'components/PostList/PostList'
import { PageSidebar } from 'components/PageSidebar/PageSidebar'
import { PageHeader } from 'components/PageHeader/PageHeader'

import styles from './HomePage.module.scss'

export const HomePage = () => (
  <Fragment>
    <PageHeader />
    <div className={styles.container}>
      <PostList />
      <PageSidebar />
    </div>
  </Fragment>
)
