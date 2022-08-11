import './LeftSide.scss'
import LogoSearch from './LogoSearch'
import ProfileCard from './ProfileCard'
import FollowersCard from './FollowersCard'
// import './test.css'

const LeftSide = () => {
  return (
    <div>
      <div className="left-side">
        <LogoSearch/>
        <ProfileCard/>
        <FollowersCard/>
      </div>

    </div>
  )
}

export default LeftSide
