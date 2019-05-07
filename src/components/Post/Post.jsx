import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faShareSquare, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { get } from 'lodash'

import styles from './Post.module.scss'

export const Post = ({ user, location, postPicture }) => {
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
      <div className={styles.postImageWrapper}>
        <img alt="postPicture" src={postPicture} className={styles.postImage} />
      </div>
      <div className={styles.postSectionWrapper}>
        <div className={styles.actionButtonWrap}>
          <button className={styles.actionButton}>
            <span className={styles.actionButtonIcon}>
              <FontAwesomeIcon icon={faHeart} />
            </span>
          </button>
        </div>

        <div className={styles.actionButtonWrap}>
          <button className={styles.actionButton}>
            <span className={styles.actionButtonIcon}>
              <FontAwesomeIcon icon={faComment} />
            </span>
          </button>
        </div>

        <div className={styles.actionButtonWrap}>
          <button className={styles.actionButton}>
            <span className={styles.actionButtonShare}>
              <span className={styles.actionButtonIcon}>
                <FontAwesomeIcon icon={faShareSquare} />
              </span>
            </span>
          </button>
        </div>

        <div className={styles.actionButtonWrap}>
          <button className={styles.actionButton}>
            <span className={styles.actionButtonSave}>
              <span className={styles.actionButtonIcon}>
                <FontAwesomeIcon icon={faBookmark} />
              </span>
            </span>
          </button>
        </div>
      </div>
      <div className={styles.postSectionWrapper}>
        <div className="likesSection">
          <div className="likesInfo">
            <span>37</span>
            Likes
          </div>
        </div>
      </div>
      <div className={styles.postSectionWrapper}>
        <ul className={styles.commentList}>
          <li>
            <span className={styles.commentAuthor}>Author</span>
            Comment
          </li>
          <li>
            <span className={styles.commentAuthor}>Author</span>
            Comment
          </li>
          <li>
            <span className={styles.commentAuthor}>Author</span>
            Comment
          </li>
        </ul>
      </div>
      <div className={styles.postSectionWrapper}>
        <div>
          <time className={styles.postDate} dateTime="2019-03-30T16:41:01.000Z" title="30 march 2019">
            1 mounth ago
          </time>
        </div>
      </div>
    </div>
  )
}

Post.propTypes = {
  user: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  postPicture: PropTypes.object.isRequired,
}
