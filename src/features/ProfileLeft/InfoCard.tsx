import './InfoCard.scss'
import { UilPen } from '@iconscout/react-unicons'
import { useState } from 'react'
import ProfileModal from './ProfileModal'

const InfoCard = () => {
  const [opened, setOpened] = useState(false)
  return (
    <div className="info-card">
      <div className="info-head">
        <h4>Your Info</h4>
        <UilPen
          width='2rem'
          height='1.2rem'
          onClick={() => setOpened(true)}
        />
        <ProfileModal opened={opened} setOpened={setOpened}/>
      </div>
      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>in Relationship</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>in Relationship</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>in Relationship</span>
      </div>
      <button className="button logout-btn">Logout</button>
    </div>
  )
}

export default InfoCard
