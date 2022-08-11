import LogoSearch from '@/features/LeftSide/LogoSearch'
import InfoCard from '@/features/ProfileLeft/InfoCard'
import FollowersCard from '@/features/LeftSide/FollowersCard'
import './ProfileLeft.scss'

const ProfileLeft = () => {
  return (
    <div className="profile-left">
      <LogoSearch/>
      <InfoCard/>
      <FollowersCard/>
    </div>
  )
}

export default ProfileLeft
