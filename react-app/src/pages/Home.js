import React from 'react'
import '../style/pagesStyle/Home.scss'
import Sidebar from '../components/sidebar/Sidebar'
import Feed from '../components/feed/Feed'

const Home = () => {
  return (
    <div className='home'>
      <div className="home_wrapper">
        <Sidebar/>
        <Feed/>
      </div>
    </div>
  )
}

export default Home
