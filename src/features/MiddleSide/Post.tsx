import './Post.scss'
import { IPost } from './types/Post'
import comment from '@/assets/img/comment.png'
import share from '@/assets/img/share.png'
import heart from '@/assets/img/like.png'
import notLike from '@/assets/img/notlike.png'

const Post = (data:IPost) => {
  return (
    <div className="post">
      <img src={data.img} alt=""/>
      <div className="post-react">
        <img src={data.likes ? heart : notLike} alt=""/>
        <img src={comment} alt=""/>
        <img src={share} alt=""/>
      </div>
      <span style={{ color: 'var(--gray)', fontSize: '12px' }}>{data.likes} likes</span>
      <div className="detail">
        <span><b>{data.name}</b></span>
        <span>{data.desc}</span>
      </div>
    </div>
  )
}

export default Post
