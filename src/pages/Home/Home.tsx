// import React from 'react'
import './Home.scss'
import LeftSide from '@/features/LeftSide'
import MiddleSide from '@/features/MiddleSide'
import RightSide from '@/features/RightSide'

const Home = () => {
  return (
    <div className="Home">
      <LeftSide/>
      <MiddleSide/>
      <RightSide/>
    </div>
  )
}

export default Home
