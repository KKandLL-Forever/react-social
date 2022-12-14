import cover from '@/assets/img/cover.jpg'
import profile from '@/assets/img/profileImg.jpg'
import './ProfileCard.scss'

const ProfileCard = () => {
  const ProfilePage = true
  return (
    <div className="profile-card">
      <div className="profile-img">
        <img src={cover} alt=""/>
        <img src={profile} alt=""/>
      </div>
      <div className="profile-name">
        <span>Donald Trump</span>
        <span>Ex US President</span>
      </div>
      <div className="follow-status">
        <hr/>
        <div>
          <div className="follow">
            <span>1200</span>
            <span>Following</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>12</span>
            <span>Followers</span>
          </div>
          {
            ProfilePage && (
              <>
                <div className="vl"></div>
                <div className="follow">
                  <span>3</span>
                  <span>Posts</span>
                </div>
              </>
            )
          }
        </div>
        <hr/>
      </div>
      {ProfilePage ? '' : <span className="my-profile">My Profile</span>}
    </div>
  )
}

export default ProfileCard
