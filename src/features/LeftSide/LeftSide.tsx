// import React from 'react'
import './LeftSide.scss'
import LogoSearch from './LogoSearch'
import ProfileCard from './ProfileCard'
import FollowersCard from './FollowersCard'
// import './ProfileCard.scss'
// import './test.css'

const LeftSide = () => {
  return (
    <div>
      <div className="leftSide">
        <LogoSearch/>
        <ProfileCard/>
        <FollowersCard/>
      </div>

    </div>
  )
}

export default LeftSide
