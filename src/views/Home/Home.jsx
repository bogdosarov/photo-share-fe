import React from 'react'

import { PostList } from 'components/PostList/PostList'
import Sidebar from '../../components/Sidebar/Sidebar'

const Home = () => (
  <div className="conteiner">
    <h1>Home</h1>
    <main className="main-content">
      <PostList />
      <Sidebar />
    </main>
  </div>
)

export default Home
