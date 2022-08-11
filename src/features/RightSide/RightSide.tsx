import './RightSide.scss'
import TrendCard from './TrendCard'

import home from '@/assets/img/home.png'
import notify from '@/assets/img/noti.png'
import comment from '@/assets/img/comment.png'
import { UilSetting } from '@iconscout/react-unicons'

const RightSide = () => {
  return (
    <div className="right-side">
      <div className="nav-icons">
        <img src={home} alt=""/>
        <UilSetting/>
        <img src={notify} alt=""/>
        <img src={comment} alt=""/>
      </div>
      <TrendCard/>
      <button className="button right-share-btn">Share</button>
    </div>
  )
}

export default RightSide
