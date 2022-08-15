import { useState } from 'react'
import './RightSide.scss'
import TrendCard from './TrendCard'
import ShareModal from './ShareModal'
import home from '@/assets/img/home.png'
import notify from '@/assets/img/noti.png'
import comment from '@/assets/img/comment.png'
import { UilSetting } from '@iconscout/react-unicons'

const RightSide = () => {
  const [opened, setOpened] = useState(false)

  return (
    <div className="right-side">
      <div className="nav-icons">
        <img src={home} alt=""/>
        <UilSetting/>
        <img src={notify} alt=""/>
        <img src={comment} alt=""/>
      </div>
      <TrendCard/>
      <button className="button right-share-btn" onClick={() => setOpened(true)}>Share</button>
      <ShareModal opened={opened} setOpened={setOpened}/>
    </div>
  )
}

export default RightSide
