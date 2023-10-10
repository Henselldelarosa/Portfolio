import React from 'react'
import '../../style/componentStyle/Feed.scss'
import Project from '../projects/Project'


const Feed = () => {
  return (
    <div className='feed'>

      <div className="feed__wrapper">
        <Project/>
      </div>
    </div>
  )
}

export default Feed
