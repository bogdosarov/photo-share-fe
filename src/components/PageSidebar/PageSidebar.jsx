import React from 'react'

import styles from './Sidebar.module.scss'

export const PageSidebar = () => (
  <div className={styles.sidebar}>
    <h4>Sidebar</h4>
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
      <li>List item 4</li>
    </ul>
  </div>
)
