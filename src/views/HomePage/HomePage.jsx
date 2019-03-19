import React, { Fragment } from 'react'

import styles from './HomePage.module.scss'

import { PostList } from 'components/PostList/PostList'
import { PageSidebar } from 'components/PageSidebar/PageSidebar'
import { PageHeader } from 'components/PageHeader/PageHeader'

export const HomePage = () => (
  <Fragment>
    <Fragment>
      <PageHeader />
      <div className={styles.container}>
        {/*<PageContent>*/}
        <PostList />
        <PageSidebar />
        {/*</PageContent>*/}
      </div>
    </Fragment>
  </Fragment>
)
