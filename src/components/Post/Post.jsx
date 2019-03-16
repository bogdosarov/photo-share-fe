import React from 'react'
import PropTypes from 'prop-types'
import { get } from 'lodash'

import styles from './Post.module.scss'

export const Post = ({ user, location }) => {
  const userName = get(user, 'userName')
  const userId = get(user, 'id')
  const userImage = get(user, 'userPictureSmall')
  const locationTitle = get(location, 'title')
  const locationId = get(location, 'id')

  return (
    <div className={styles.wrapper}>
      <div className={styles.postHeader}>
        <img src={userImage} alt={userName} className={styles.profileImage} />
        <div className={styles.links}>
          <a href={`users/${userId}`} className={styles.profileLink}>
            {userName}
          </a>
          <a href={`locations/${locationId}`} className={styles.locationLink}>
            {locationTitle}
          </a>
        </div>
      </div>
    </div>
  )
}

Post.propTypes = {
  user: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}
