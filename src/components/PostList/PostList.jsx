import React from 'react'
import PropTypes from 'prop-types'

import { Post } from 'components/Post/Post'

const mockPostList = [
  {
    id: 1,
    user: {
      id: 1,
      userPictureSmall: 'https://via.placeholder.com/30',
      userName: 'maxim.maruhnyak',
    },
    location: {
      id: '1',
      title: 'Location title',
      link: 'https://googole.com',
    },
  },
  {
    id: 2,
    user: {
      id: 1,
      userPictureSmall: 'https://via.placeholder.com/30',
      userName: 'maxim.maruhnyak',
    },
    location: {
      id: 1,
      title: 'Location title',
      link: 'https://googole.com',
    },
  },
]

export const PostList = ({ postList = mockPostList }) => (
  <div>
    {postList.map(post => (
      <Post key={post.id} {...post} />
    ))}
  </div>
)

PostList.propTypes = {
  postList: PropTypes.array.isRequired,
}
