import './Posts.scss'
import { PostsData } from '@/tempData/postsData'
import Post from './Post'

const Posts = () => {
  return (
    <div className="posts">
      {
        PostsData.map(post => {
          return <Post {...post} key={post.id}/>
        })
      }
    </div>
  )
}

export default Posts
