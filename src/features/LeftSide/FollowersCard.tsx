import './FollowersCard.scss'
import { Followers } from '@/tempData/followers'

const FollowersCard = () => {
  return (
    <div className="followers-card">
      <h3>Who is following you</h3>
      {
        Followers.map((user, id) => {
          return (
            <div className="followers" key={id}>
              <div>
                <img className="follower-img" src={user.img} alt=""/>
                <div className="name">
                  <span>{user.name}</span>
                  <span>{user.username}</span>
                </div>
              </div>
              <button className="button follower-btn">Follow</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default FollowersCard
