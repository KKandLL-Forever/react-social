import './Profile.scss'
import ProfileLeft from '@/features/ProfileLeft'
import ProfileCard from '@/features/LeftSide/ProfileCard'
import Posts from '@/features/MiddleSide/Posts'
import RightSide from '@/features/RightSide'

const Profile = () => {
  return (
    <div className="profile">
      <ProfileLeft/>
      <div className="profile-center">
        <ProfileCard/>
        <Posts/>
      </div>
      <RightSide/>
    </div>
  )
}

export default Profile
